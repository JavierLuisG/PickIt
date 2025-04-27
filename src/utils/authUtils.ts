export const formatInput = (data: string): string => {
  return data.trim().toLowerCase();
};

export const encodePassword = (data: string): string => {
  return btoa(data);
};

export const formatText = (data: string): string => {
  return data.trim().toLowerCase().split(" ").map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
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

interface ApiResponse {
  success: boolean;
  message: string;
  userData?: {
    email: string;
    name?: string;
  };
}

export const fakeApi = (email: string, password: string): Promise<ApiResponse> => {
  return new Promise<ApiResponse>((resolve, reject) => {
    if (!email || !password) {
      reject(new Error("Ingresa correctamente el email y contraseña"));
      return;
    }
    let registered;
    try {
      const storedData = localStorage.getItem("registered");
      registered = storedData ? JSON.parse(storedData) : { email: "", password: "" };
    } catch (error) {
      reject(new Error("Error al leer las credenciales almacenadas"));
      return;
    }

    setTimeout(() => {
      // No hay usuario registrado
      if (!registered.email) {
        resolve({
          success: false,
          message: "No hay usuario registrado en el sistema"
        });
        return;
      }
      // Email coincide pero password incorrecta
      if (email === registered.email && password !== registered.password) {
        resolve({
          success: false,
          message: "La contraseña es incorrecta"
        });
        return;
      }
      // Email no coincide con ningún registro
      if (email !== registered.email) {
        resolve({
          success: false,
          message: "El correo electrónico no está registrado"
        });
        return;
      }
      // Login exitoso
      resolve({
        success: true,
        message: "Inicio de sesión exitoso",
        userData: {
          email: registered.email,
          name: registered.name || "Usuario"
        }
      });
    }, 1000);
  });
};
