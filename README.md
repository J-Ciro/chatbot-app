# 🤖 Chatbot Fullstack Application

## 📖 Descripción del Proyecto

Esta aplicación web permite a los usuarios interactuar con un modelo de lenguaje mediante una interfaz de chat intuitiva.

### ✨ Características Principales

- **Interfaz de chat en tiempo real** con diseño intuitivo y responsive
- **Historial de mensajes persistente** almacenado en base de datos MySQL
- **Integración con API de OpenAI** para respuestas inteligentes
- **Arquitectura RESTful** con endpoints bien definidos
- **Tipado completo con TypeScript** tanto en backend como frontend
- **Documentación de API** con Swagger/JSDoc
- **Despliegue** con Vercel y Railway

## 🛠️ Stack Tecnológico

### Backend

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web minimalista
- **TypeScript** - Superset tipado de JavaScript
- **MySQL** - Base de datos relacional
- **Dotenv** - Gestión de variables de entorno

### Frontend

- **React** - Biblioteca de JavaScript para UI
- **TypeScript** - Tipado estático
- **Axios** - Cliente HTTP para llamadas a la API
- **CSS** - Estilos

### Base de Datos

- **MySQL** - Sistema de gestión de base de datos

## 🏗️ Arquitectura del Proyecto

```
📦 chatbot-app/
├── 📁 backend/
│   ├── 📁 src/
│   │   ├── 📁 config/
│   │   ├── 📁 routes/
│   │   ├── 📁 services/
│   │   ├── 📁 types/
│   │   ├── 📄 app.ts
│   │   └── 📄 server.ts
│   ├── 📄 package.json
│   ├── 📄 tsconfig.json
│   └── 📄 .env
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 assets/
│   │   ├── 📁 hooks/
│   │   ├── 📁 models/
│   │   ├── 📁 services/
│   │   └── 📄 App.tsx
│   ├── 📄 package.json
│   ├── 📄 tsconfig.json
│   └── 📄 index.html
└── 📄 README.md
```

## 🗄️ Estructura de Base de Datos

### Tabla: `messages`

| Campo        | Tipo                     | Descripción                     |
| ------------ | ------------------------ | ------------------------------- |
| `id_message` | INT (PK, AUTO_INCREMENT) | Identificador único del mensaje |
| `content`    | TEXT                     | Contenido del mensaje           |
| `sender`     | ENUM('bot', 'user')      | Tipo de remitente               |
| `timestamps` | DATETIME                 | Fecha y hora de creación        |

```sql
CREATE TABLE messages (
    id_message INT PRIMARY KEY AUTO_INCREMENT,
    content TEXT NOT NULL,
    sender ENUM('bot', 'user') NOT NULL,
    timestamps DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 🚀 Instalación y Configuración

### Prerequisitos

- **Node.js** (versión 18 o superior)
- **npm**
- **MySQL** (versión 8.0 o superior)

### 1. Clonar el Repositorio

```bash
git clone https://github.com/J-Ciro/chatbot-app.git
cd chatbot-app
```

### 2. Configuración del Backend

```bash
# Navegar a la carpeta backend
cd backend

# Instalar dependencias
npm install

# Crear archivo de variables de entorno
echo "" >> .env
```

#### Configurar Variables de Entorno (.env)

```env

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
PORT=
API_URL=
```

#### Configurar Base de Datos

```sql
# Crear la base de datos

 mysql -u root -p

CREATE DATABASE chatbot_db;

CREATE TABLE messages (
    id_message INT PRIMARY KEY AUTO_INCREMENT,
    content TEXT NOT NULL,
    sender ENUM('bot', 'user') NOT NULL,
    timestamps DATETIME DEFAULT CURRENT_TIMESTAMP
);

```

#### Ejecutar Backend

```bash
npm run dev
```

### 3. Configuración del Frontend

```bash
# Abrir nueva terminal y navegar a la carpeta frontend
cd frontend

# Instalar dependencias
npm install

# Ejecutar frontend
npm run dev
```

## 📡 API Endpoints

### Base URL:

- Local: `http://localhost:3001/`
- Production: `https://chatbot-app-production-bb4c.up.railway.app/`

## Api Documentada en swagger:

- Local: `http://localhost:3001/api-docs`
- Production: `https://chatbot-app-production-bb4c.up.railway.app/api-docs/`

#### 📥 GET /messages

Obtiene todos los mensajes del historial de chat.

#### 📤 POST /messages

Crea un nuevo mensaje y obtiene respuesta del bot.

## 🏗️ Decisiones Técnicas

### 🔐 Gestión de Variables de Entorno (.env)

**Decisión:** Separar todas las configuraciones sensibles y URLs en un archivo `.env`

**Razones:**

- **Seguridad:** Las credenciales de base de datos y API keys no se exponen en el código fuente
- **Flexibilidad:** Diferentes configuraciones para desarrollo, testing y producción sin cambiar código
- **Mejores prácticas:** Cumple con el principio de "Twelve-Factor App" para aplicaciones modernas
- **Facilita el despliegue:** Cada ambiente puede tener sus propias variables sin conflictos

### 📚 Documentación de API con Swagger

**Decisión:** Implementar Swagger/OpenAPI para documentación automática de la API

**Razones:**

- **Documentación automática:** Se genera desde el código, siempre actualizada
- **Testing integrado:** Permite probar endpoints directamente desde la interfaz

### 🌐 Axios para Cliente HTTP

**Decisión:** Utilizar Axios en lugar del fetch nativo

**Razones:**

- **Interceptores:** Permite manejar requests/responses globalmente (autenticación, logging, errores)
- **Transformación automática:** Convierte automáticamente JSON, maneja headers
- **Mejor manejo de errores:** API más consistente para manejar diferentes tipos de errores

### ⚙️ Dotenv para Configuración

**Decisión:** Usar dotenv para cargar variables de entorno

**Razones:**

- **Separación de configuración:** Mantiene el código limpio y sin hardcoded values
- **Seguridad mejorada:** Credenciales sensibles no se commitean al repositorio
- **Configuración por ambiente:** Fácil cambio entre desarrollo, testing y producción

### 🧩 Modularización de Componentes React

**Decisión:** Separar componentes siguiendo principios de responsabilidad única

**Razones:**

- **Reutilización:** Componentes pequeños son más fáciles de reutilizar
- **Testing:** Cada componente puede testearse de forma aislada
- **Mantenibilidad:** Cambios localizados no afectan otros componentes
- **Colaboración:** Diferentes desarrolladores pueden trabajar en componentes separados

### 🚂 Railway para Backend y Base de Datos

**Decisión:** Usar Railway para desplegar tanto el servidor Node.js como MySQL

**Razones:**

- **Simplicidad:** Deploy automático desde GitHub sin configuración compleja
- **Base de datos integrada:** MySQL como servicio sin gestión de infraestructura
- **Variables de entorno:** Gestión fácil y segura de configuración

### ⚡ Vercel para Frontend

**Decisión:** Desplegar React app en Vercel

**Razones:**

- **Optimización automática:** Build optimizations y splitting automático
- **Deploy automático:** Integración perfecta con GitHub para CI/CD
- **Preview deployments:** Cada PR genera un preview automático
- **Performance:** Optimizaciones específicas para React/Next.js

### URLs de Producción

- **Frontend:** [https://chatbot-app-teal.vercel.app/](https://chatbot-app-teal.vercel.app/)
- **Backend API:** [https://chatbot-app-production-bb4c.up.railway.app/api-docs/](https://chatbot-app-production-bb4c.up.railway.app/api-docs/)
