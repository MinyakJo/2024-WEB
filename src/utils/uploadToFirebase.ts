import { ref } from "firebase/storage";
import { fStorage } from "apis/firebase";
import { v4 as uuidv4 } from "uuid";
import { uploadBytes } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";

export const uploadToFirebase = async ({
  id,
  fileList,
}: {
  id: string | number;
  fileList: File[];
}) => {
  const list: string[] = [];

  for (let i = 0; i < fileList.length; i++) {
    const fileRef = ref(fStorage, `${id}/${uuidv4()}`);
    const upload = await uploadBytes(fileRef, fileList[i]);
    const url = await getDownloadURL(upload.ref);
    list.push(url);
  }

  return list;
};
