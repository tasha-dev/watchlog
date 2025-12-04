// Codes by mahdi tasha
// Forcing next.js to render this component as client side componentn
"use client";

// Importing part
import { JSX, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FileText, X } from "lucide-react";
import { Button } from "@/component/ui/button";
import { cn } from "@/lib/util";
import { UploadProps } from "@/type/component";

// Creating and exporting Upload component as default
export default function Upload({ onValueChange }: UploadProps): JSX.Element {
  // Defining hooks
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
      onValueChange?.(acceptedFiles[0]);
    },
    [onValueChange],
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject, open } =
    useDropzone({
      onDrop,
      accept: {
        "text/plain": [".txt"],
      },
      multiple: false,
    });

  // Defining helper to remove file from the state
  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Returning JSX
  return (
    <div className="w-full space-y-6">
      <div
        {...getRootProps()}
        className={cn(
          "relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 cursor-pointer",
          isDragActive
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/30 hover:border-muted-foreground/50 hover:bg-accent/5",
          isDragReject && "border-destructive bg-destructive/5",
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-4">
          <FileText
            className={cn(
              "w-14 h-14",
              isDragActive ? "text-primary" : "text-muted-foreground",
            )}
          />
          <div className="space-y-2">
            {isDragActive ? (
              <p className="text-lg font-medium text-primary">
                Drop your .txt files here...
              </p>
            ) : (
              <>
                <p className="text-lg font-medium">
                  Drag & drop <span className="text-primary">.txt</span> files
                  here
                </p>
                <p className="text-sm text-muted-foreground">
                  or click to browse • Only plain text files are accepted
                </p>
              </>
            )}
            {isDragReject && (
              <p className="text-sm font-medium text-destructive">
                Sorry, only .txt files are allowed
              </p>
            )}
          </div>
        </div>
      </div>
      {files.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">
            {files.length} text file{files.length > 1 ? "s" : ""} selected
          </p>
          <div className="space-y-2">
            {files.map((file, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border bg-background px-4 py-2 text-sm"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(i)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
