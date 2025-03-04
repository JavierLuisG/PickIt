export const validateEmail = (email: string) => {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validation.test(email);
};

export const capitalizeEmail = (data: string) => {
  let toCapitalize = null;
  data && (toCapitalize = data.slice().trim().toLowerCase());
  return toCapitalize;
};

export const capitalizePassword = (data: string) => {
  let encodedStringToBtoA = null;
  data && (encodedStringToBtoA = btoa(data));
  return encodedStringToBtoA;
};

export const fakeApi = (email: string, password: string) => {
  return new Promise<{ success: boolean }>((resolve) => {
    setTimeout(() => {
      if (email === "javier@gmail.com" && password === "MTIz") {
        resolve({ success: true });
      } else {
        resolve({ success: false });
      }
    }, 1000);
  });
};
