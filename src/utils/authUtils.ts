export const validateEmail = (email: string): boolean => {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validation.test(email);
};

export const formatInput = (data: string): string => {
  return data.trim().toLowerCase();
};

export const encodePassword = (data: string): string => {
  return btoa(data);
};

export const fakeApi = (email: string, password: string): Promise<{ success: boolean }>  => {
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
