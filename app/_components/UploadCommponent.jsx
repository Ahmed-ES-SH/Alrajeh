import { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  // عند اختيار الملف
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // رفع الملف إلى السيرفر
  const onFileUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("File uploaded successfully!");
      } else {
        setMessage("File upload failed.");
      }
    } catch (error) {
      setMessage("An error occurred while uploading the file.");
    }
  };

  return (
    <div>
      <h2>Upload a File</h2>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUpload;
