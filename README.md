# Proyecto React con Bootstrap, i18n, React Router, y Axios

Este proyecto utiliza varias bibliotecas populares para facilitar el desarrollo de interfaces de usuario y la gestión de contenido en múltiples idiomas. A continuación, te mostramos cómo configurar y ejecutar el proyecto en tu máquina local.

# Requisitos previos

- **Node.js** instalado (v20 o superior).
- **npm** (Node Package Manager), que viene incluido con Node.js.

# Instalación

1. Clona este repositorio en tu máquina local o descarga el código fuente.

2. Abre una terminal y navega a la carpeta raíz del proyecto.

3. Ejecuta el siguiente comando para instalar las dependencias principales:

   ```bash
   npm install react-bootstrap bootstrap 
   
4. Luego ejecuta los siguientes comando para las dependencias secundarias (pero obligatorias):

   ```bash
   npm install i18next react-i18next i18next-browser-languagedetector
   npm install react-router-dom
   npm install axios

5. Luego ejecuta el siguiente comando para ejecutar el proyecto, esto se podrá visualizar en http://localhost:3000/ .

   ```bash
   npm start

# Componentes y decisiones:

## Componente Home
El componente **Home** es responsable de renderizar el formulario de inicio de sesión y manejar la entrada del usuario. Incluye la validación del formulario y la navegación a la página **About** al enviar correctamente el formulario.

**Archivo**: `src/Home.js`  
**Características clave**:
- Utiliza `useState` para gestionar los datos del formulario.
- Valida los campos de correo electrónico y contraseña.
- Navega a la página **About** tras el envío exitoso del formulario.
- Incluye un selector de idioma para la localización.

## Componente About
El componente **About** muestra la información del perfil del usuario y los detalles de la sesión. Incluye una tarjeta de perfil y columnas de sesión para diferentes actividades.

**Archivo**: `src/About.js`  
**Características clave**:
- Renderiza la información del perfil del usuario.
- Muestra detalles de las sesiones para actividades como correr, nadar y andar en bicicleta.

## Componente Index
El componente **Index** es el punto de entrada de la aplicación React. Inicializa la aplicación y renderiza el componente **App**.

**Archivo**: `src/index.js`  
**Características clave**:
- Inicializa la aplicación React.
- Renderiza el componente **App**.
- Incluye **Bootstrap** para el estilo y **i18n** para la localización.

## Configuración de i18n
El archivo de configuración de **i18n** establece la internacionalización de la aplicación. Define las traducciones para diferentes idiomas e inicializa la librería **i18next**.

**Archivo**: `src/i18n.js`  
**Características clave**:
- Define traducciones para inglés y español.
- Inicializa **i18next** con las traducciones definidas.
- Establece el idioma predeterminado en español con inglés como opción secundaria.

## Componente LanguageSwitcher
El componente **LanguageSwitcher** permite a los usuarios cambiar entre diferentes idiomas. Utiliza la librería **i18next** para cambiar el idioma de forma dinámica.

**Archivo**: `src/LanguageSwitcher.js`  
**Características clave**:
- Proporciona botones para cambiar entre inglés y español.
- Utiliza **i18next** para cambiar el idioma de manera dinámica.

## Datos simulados (mock data)
Se utilizan funciones de servicio **mock** para simular los datos de usuario y las sesiones de entrenamiento.
Se realizó una creación de un API mediante el servicio de **Mockaroo**, donde a través de un fetch se consigue la información del API.

