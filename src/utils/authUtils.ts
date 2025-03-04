export const formatInput = (data: string): string => {
  return data.trim().toLowerCase();
};

export const encodePassword = (data: string): string => {
  return btoa(data);
};

export const formatText = (data: string): string => {
  let toCapitalize = data[0].toUpperCase() + data.slice(1).toLowerCase();
  return toCapitalize.split(" ").map(word => {
    if (word.length > 0) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    return '';
  }).join(" ");
};

export const validateText = (text: string): boolean => {
  return text.length >= 3;
};

export const validateEmail = (email: string): boolean => {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validation.test(email);
};

export const validatePhone = (phone: string): boolean => {
  return phone.length === 10;
};

export const fakeApi = (email: string, password: string): Promise<{ success: boolean }> => {
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
