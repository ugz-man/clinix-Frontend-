"use client";

import Image from "next/image";
import React, { useRef } from "react";

import outlineImage from "@/public/images/outline-user.png";

export default function UploadPhoto({ userPhoto }: { userPhoto: string }) {
  const imageInputRef = useRef<HTMLInputElement>(null);

  function selectImage() {
    imageInputRef.current?.click();
  }

  return (
    <div className="flex items-center">
      {userPhoto === "default.jpg" ? (
        <Image
          src={outlineImage}
          alt="user photo"
          className="w-20 rounded-full"
        />
      ) : (
        <div className="relative aspect-square w-20">
          <Image
            src={userPhoto}
            fill
            alt="user photo"
            className="w-20 rounded-full"
          />
        </div>
      )}

      {/* <Button type="primary" className="" onClick={selectImage}>
        Change Photo
      </Button> */}

      {/* This button was used instead of the functional component type
      because we neded to set the type to button so as to prevent the 
      automatic submitting of the form. This particular button isn't meant to submit the form but to open file explorer   */}
      <button
        type="button"
        onClick={selectImage}
        className="h-10 cursor-pointer rounded border-none bg-primary-300 px-4 py-2 text-xs uppercase text-white hover:inset-10 hover:shadow-lg hover:shadow-blue-gray-100 disabled:flex disabled:cursor-default disabled:justify-center disabled:bg-primary-200 lg:text-base"
      >
        Change Photo
      </button>

      <input
        id="imageInput"
        name="imageInput"
        type="file"
        accept="image/*"
        ref={imageInputRef}
        className="hidden"
      />
    </div>
  );
}
