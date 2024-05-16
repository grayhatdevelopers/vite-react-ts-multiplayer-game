#!/bin/bash

# Iterate over all audio files in the current directory
for input_file in *.mp3 *.wav; do
  # Check if the file exists and is a regular file
  if [ -f "$input_file" ]; then
    # Extract file name and extension
    file_name=$(basename "$input_file")
    file_name_no_ext="${file_name%.*}"
    file_extension="${file_name##*.}"

    # Create a temporary compressed file
    temp_file="temp_${file_name_no_ext}_compressed.${file_extension}"

    # Compress using FFmpeg
    ffmpeg -i "$input_file" -b:a 128k "$temp_file"

    # Replace the original file with the compressed version
    mv "$temp_file" "$input_file"
  fi
done

echo "Compression complete. Original files replaced with compressed versions."
