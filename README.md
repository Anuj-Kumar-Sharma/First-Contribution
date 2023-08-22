# First-Contribution
Hi this is Aryan and this is my contribution.
This is my first contribution
hello anuj thanks for this video. Very Helpful
Hello
import os
import pandas as pd
import librosa
from librosa.feature import mfcc

# Path to the main folder containing subfolders with .wav files
main_folder_path = 'C:/Users/DELL/Desktop/Male'

# Initialize lists to store labels and MFCCs for each audio
labels = []
mfccs_list = []

# Walk through all subdirectories and files
for root, dirs, files in os.walk(main_folder_path):
    for file in files:
        if file.endswith('.wav'):
            wav_file_path = os.path.join(root, file)
            
            # Extract label from the subdirectory name
            label = os.path.basename(root)
            
            # Load the audio file using librosa
            y, sr = librosa.load(wav_file_path)

            # Extract MFCCs
            mfccs = mfcc(y=y, sr=sr, n_mfcc=13)

            # Append label and MFCCs to their respective lists
            labels.append(label)
            mfccs_list.append(mfccs.tolist())

# Create a DataFrame to store the features and labels
data = {'Label': labels, 'MFCCs': mfccs_list}
df = pd.DataFrame(data)
print(df)
# Save the DataFrame to a CSV file
csv_filename = 'audio_features_new.csv'
df.to_csv(csv_filename, index=False)

print("DataFrame saved to:", csv_filename)
