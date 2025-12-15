# 🤖 Chat Bot - AI Assistant Application

Ứng dụng chatbot tương tác với hỗ trợ AI đa nền tảng sử dụng React, Express.js và các API AI như OpenAI, Google Generative AI, và DeepSeek.

## 📋 Mục Lục

- [Tổng Quan](#tổng-quan)
- [Tính Năng](#tính-năng)
- [Cấu Trúc Project](#cấu-trúc-project)
- [Yêu Cầu Hệ Thống](#yêu-cầu-hệ-thống)
- [Cài Đặt](#cài-đặt)
- [Cấu Hình](#cấu-hình)
- [Chạy Ứng Dụng](#chạy-ứng-dụng)
- [API Documentation](#api-documentation)
- [Cấu Trúc Thư Mục](#cấu-trúc-thư-mục-chi-tiết)
- [Công Nghệ Sử Dụng](#công-nghệ-sử-dụng)
- [Hướng Dẫn Sử Dụng](#hướng-dẫn-sử-dụng)

## 🎯 Tổng Quan

Chat Bot là một ứng dụng web hiện đại cho phép người dùng tương tác với các mô hình AI khác nhau. Ứng dụng bao gồm:

- **Frontend**: Giao diện React với Vite, hỗ trợ streaming tin nhắn real-time
- **Backend**: Express.js API server xử lý yêu cầu
- **AI Support**: Tích hợp với OpenAI, Google Generative AI, và DeepSeek

## ✨ Tính Năng

✅ Chat real-time với streaming responses  
✅ Hỗ trợ nhiều nền tảng AI (OpenAI, Google AI, DeepSeek)  
✅ Giao diện thân thiện, responsive design  
✅ Loading state indicators  
✅ Markdown support cho tin nhắn  
✅ Auto-resizing textarea  
✅ CORS enabled cho cross-origin requests

## 📁 Cấu Trúc Project

```
chat_bot/
├── backend/                    # Express.js Server
│   ├── src/
│   │   ├── server.js          # Entry point - khởi tạo server
│   │   ├── deepseek.route.js  # Routes định nghĩa
│   │   ├── deepseek.controller.js # Controllers xử lý logic
│   │   └── deepseek.service.js    # Services tương tác với AI
│   ├── .env                   # Environment variables
│   ├── .env.example           # Template cho .env
│   └── package.json           # Dependencies
│
├── frontend/                   # React + Vite
│   ├── src/
│   │   ├── main.jsx           # React entry point
│   │   ├── App.jsx            # Main component
│   │   ├── App.module.css     # Styles chính
│   │   ├── index.css          # Global styles
│   │   ├── components/        # UI Components
│   │   │   ├── chat/          # Chat display component
│   │   │   │   ├── Chat.jsx
│   │   │   │   └── Chat.module.css
│   │   │   ├── controls/      # Input controls component
│   │   │   │   ├── Controls.jsx
│   │   │   │   └── Controls.module.css
│   │   │   └── loader/        # Loading spinner component
│   │   │       ├── Loader.jsx
│   │   │       └── Loader.module.css
│   │   └── assistants/        # AI Assistant classes
│   │       ├── openAi.js      # OpenAI integration
│   │       └── googleAi.js    # Google AI integration
│   ├── public/                # Static assets
│   ├── .env.local            # Local environment variables
│   ├── .env.example          # Template cho .env
│   ├── vite.config.js        # Vite configuration
│   ├── eslint.config.js      # ESLint rules
│   ├── index.html            # HTML entry point
│   └── package.json          # Dependencies
│
└── README.md                  # Documentation
```

## 🔧 Yêu Cầu Hệ Thống

- **Node.js**: v18.0.0 hoặc cao hơn
- **npm**: v9.0.0 hoặc cao hơn
- **API Keys**:
  - OpenAI API Key (nếu dùng OpenAI)
  - Google Generative AI API Key (nếu dùng Google AI)
  - DeepSeek API Key (nếu dùng DeepSeek)

## 📦 Cài Đặt

### 1. Clone hoặc tải project

```bash
cd d:\WorkSpace\React\chat_bot
```

### 2. Cài đặt Backend

```bash
cd backend
npm install
```

### 3. Cài đặt Frontend

```bash
cd ../frontend
npm install
```

## ⚙️ Cấu Hình

### Backend Configuration

1. **Tạo file `.env` từ template**:

```bash
cd backend
cp .env.example .env
```

2. **Điền các thông tin cần thiết trong `.env`**:

```env
DEEPSEEK_API_KEY=your-deepseek-api-key-here
PORT=3001
```

- `DEEPSEEK_API_KEY`: API key từ DeepSeek
- `PORT`: Port để chạy backend server (mặc định: 3001)

### Frontend Configuration

1. **Tạo file `.env.local` từ template**:

```bash
cd frontend
cp .env.example .env.local
```

2. **Điền các API keys trong `.env.local`**:

```env
VITE_OPEN_AI_API_KEY=your-openai-api-key-here
VITE_GOOGLE_AI_API_KEY=your-google-ai-api-key-here
```

**Lưu ý**: Các biến môi trường frontend phải có prefix `VITE_` để Vite có thể nhận diện.

## 🚀 Chạy Ứng Dụng

### Chế độ Development

**Terminal 1 - Chạy Backend**:

```bash
cd backend
npm run dev
```

Backend sẽ chạy tại `http://localhost:3001`

**Terminal 2 - Chạy Frontend**:

```bash
cd frontend
npm run dev
```

Frontend sẽ chạy tại `http://localhost:5173` (Vite mặc định)

### Chế độ Production

**Build Frontend**:

```bash
cd frontend
npm run build
```

**Chạy Backend (Production)**:

```bash
cd backend
npm start
```

### Debug Mode

```bash
cd backend
npm run debug
```

Bật Node inspector để debug

## 📡 API Documentation

### DeepSeek Endpoint

**POST** `/api/deepseek/message`

**Request Body**:

```json
{
  "message": "Xin chào, bạn là ai?"
}
```

**Response**:

```json
{
  "text": "Xin chào! Tôi là một trợ lý AI..."
}
```

**Error Response**:

```json
{
  "error": "Message is required"
}
```

## 📂 Cấu Trúc Thư Mục Chi Tiết

### Backend Files

| File                     | Mô Tả                              |
| ------------------------ | ---------------------------------- |
| `server.js`              | Khởi tạo Express app, CORS, routes |
| `deepseek.route.js`      | Định nghĩa API routes              |
| `deepseek.controller.js` | Xử lý request/response logic       |
| `deepseek.service.js`    | Tương tác với DeepSeek API         |

### Frontend Components

| Component      | Mô Tả                                  |
| -------------- | -------------------------------------- |
| `App.jsx`      | Root component, quản lý state tin nhắn |
| `Chat.jsx`     | Hiển thị danh sách tin nhắn            |
| `Controls.jsx` | Input field và nút gửi                 |
| `Loader.jsx`   | Loading spinner khi chờ response       |

### Assistants

| File          | Mô Tả                                |
| ------------- | ------------------------------------ |
| `openAi.js`   | OpenAI API wrapper, hỗ trợ streaming |
| `googleAi.js` | Google Generative AI wrapper         |

## 🛠 Công Nghệ Sử Dụng

### Backend

- **Express.js** 5.2.1 - Web framework
- **CORS** 2.8.5 - Cross-Origin Resource Sharing
- **dotenv** 17.2.3 - Environment variables
- **OpenAI SDK** 6.13.0 - OpenAI integration
- **node-fetch** 3.3.2 - HTTP requests
- **Nodemon** 3.1.11 - Development hot reload

### Frontend

- **React** 19.2.0 - UI framework
- **React DOM** 19.2.0 - React DOM rendering
- **Vite** 7.2.4 - Build tool & dev server
- **React Markdown** 10.1.0 - Markdown rendering
- **React Textarea Autosize** 8.5.9 - Auto-resizing textarea
- **Lucide React** 0.561.0 - Icon library
- **Google GenAI** 1.33.0 - Google AI integration
- **OpenAI SDK** 6.10.0 - OpenAI integration

## 📖 Hướng Dẫn Sử Dụng

### 1. Khởi động ứng dụng

Làm theo hướng dẫn ở phần "Chạy Ứng Dụng" ở trên.

### 2. Mở browser

Truy cập `http://localhost:5173` để sử dụng ứng dụng.

### 3. Gửi tin nhắn

1. Nhập tin nhắn vào text field
2. Bấm nút "Gửi" hoặc Enter
3. Chờ AI response (hỗ trợ streaming real-time)

### 4. Chuyển đổi AI Assistant

Sửa code trong `App.jsx` để chọn AI khác:

```javascript
// Sử dụng OpenAI (mặc định)
const assistant = new OpenAiAssistant();

// Hoặc sử dụng Google AI
const assistant = new GoogleAiAssistant();
```

## 🔐 Bảo Mật

- ⚠️ **KHÔNG** commit file `.env` hoặc `.env.local` lên Git
- Sử dụng `.env.example` để lưu template
- Giữ API keys riêng tư
- `dangerouslyAllowBrowser: true` trong OpenAI config chỉ dùng cho development

## 📝 Scripts

### Backend

```bash
npm run dev      # Development mode với hot reload (Nodemon)
npm run debug    # Debug mode với Node inspector
npm start        # Production mode
```

### Frontend

```bash
npm run dev      # Development server (Vite)
npm run build    # Build production
npm run lint     # Check ESLint
npm run preview  # Preview production build
```

## 🐛 Troubleshooting

### CORS Error

- Kiểm tra `frontend/src/App.jsx` có URL backend đúng không
- Trong `backend/src/server.js`, kiểm tra CORS origin config

### API Key không hoạt động

- Kiểm tra file `.env` hoặc `.env.local` tồn tại
- Kiểm tra API key có đúng định dạng không
- Kiểm tra biến môi trường frontend có prefix `VITE_` không

### Port bị chiếm dụng

- Chay lệnh: `netstat -ano | findstr :PORT` (Windows)
- Thay đổi PORT trong `.env`

## 📞 Liên Hệ & Hỗ Trợ

Nếu có vấn đề, kiểm tra:

1. Console log của browser (F12)
2. Network tab để xem API calls
3. Backend logs trong terminal

## 📄 License

ISC

---

**Phiên Bản**: 1.0.0  
**Cập Nhật Lần Cuối**: December 2025
