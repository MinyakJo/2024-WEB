import imageCompression from "browser-image-compression";

export const setFileList = async ({
  files,
  set,
  setPreview,
}: {
  files: FileList | null;
  set: any;
  setPreview?: any;
}) => {
  if (files !== null) {
    if (files.length > 5) {
      alert("이미지는 5장 이하 여야 합니다");
      return;
    }

    const options = { maxSizeMB: 5, maxWidthOrHeight: 656 };
    const fileList: File[] = [];
    const preList: string[] = [];
    let size = 0;
    const maxSize = 5 * 1024 * 1024;

    for (const file of files) {
      // 파일 리스트 푸쉬
      fileList.push(file);
      //이미지 프리뷰 푸쉬
      const compressedFile = await imageCompression(file, options);
      const img = await imageCompression
        .getDataUrlFromFile(compressedFile)
        .then((result) => result);

      preList.push(img);
      //총 사이즈 측정
      size += file.size;
    }

    if (size > maxSize) alert("사이즈는 5mb 이하 여야 합니다");
    else {
      setPreview(preList);
      set(fileList);
    }
  }
};
