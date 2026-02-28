import os
import glob
from PIL import Image

def optimize_images(directory):
    # Find all jpegs and pngs
    extensions = ('*.jpg', '*.jpeg', '*.png')
    files = []
    for ext in extensions:
        files.extend(glob.glob(os.path.join(directory, '**', ext), recursive=True))

    for file in files:
        try:
            original_size = os.path.getsize(file)
            original_size_mb = original_size / (1024 * 1024)
            
            # Skip if already very small (< 100KB)
            if original_size < 100 * 1024:
                continue

            with Image.open(file) as img:
                # Convert to RGB if RGBA (needed for JPEG saving)
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGB")
                    
                # Resize if width > 1920
                if img.width > 1920:
                    new_height = int((1920 / img.width) * img.height)
                    img = img.resize((1920, new_height), Image.Resampling.LANCZOS)

                # Save over original with optimized settings
                if file.lower().endswith('.png'):
                    img.save(file, optimize=True)
                else:
                    img.save(file, "JPEG", quality=60, optimize=True, progressive=True)

            new_size = os.path.getsize(file)
            new_size_mb = new_size / (1024 * 1024)
            
            if new_size < original_size:
                print(f"Optimized {os.path.basename(file)}: {original_size_mb:.2f}MB -> {new_size_mb:.2f}MB")
        except Exception as e:
            print(f"Error optimizing {file}: {e}")

if __name__ == "__main__":
    base_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "images")
    if os.path.exists(base_dir):
        print("Starting image optimization with Python Pillow...")
        optimize_images(base_dir)
        print("Done!")
    else:
        print(f"Directory not found: {base_dir}")
