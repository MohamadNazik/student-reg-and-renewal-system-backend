from flask import Flask, request, jsonify
from flask_cors import CORS
import pytesseract
from PIL import Image
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/extract-text', methods=['POST'])
def extract_text():
    if 'image' not in request.files:
        return jsonify({"error": "No image file provided"}), 400

    image_file = request.files['image']

    try:
        image_path = os.path.join(UPLOAD_FOLDER, image_file.filename)
        image_file.save(image_path)

        # Extract text using Tesseract
        extracted_text = pytesseract.image_to_string(Image.open(image_path))

        # Clean up image file
        os.remove(image_path)

        return jsonify({"text": extracted_text}), 200
    except Exception as e:
        return jsonify({"error": f"Failed to process image. {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
