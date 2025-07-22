# Image Search App / 이미지 검색기

This project is a simple image search application built with React and Flask.  
사용자가 입력한 검색어를 기반으로 이미지를 조회하고 시각적으로 출력하는 웹 애플리케이션입니다.

The frontend communicates with a custom Flask backend to process search requests and retrieve image data asynchronously.  
React에서 사용자 입력을 처리하고, Flask에서 외부 이미지 API를 호출해 결과를 응답합니다.

---

## Features / 주요 기능

- Search for images based on user input  
  사용자 검색어를 기반으로 이미지 검색
- Communicate with an external image API through a Flask backend  
  Flask 백엔드를 통해 외부 이미지 API와 통신
- Fullscreen modal image viewer with navigation  
  이미지 클릭 시 전체 화면 모달 뷰어 제공
- Responsive layout using Tailwind CSS  
  Tailwind CSS 기반 반응형 레이아웃 구성
- Copyable URL for sharing search results  
  검색 결과 공유를 위한 URL 복사 기능 포함

---

## Tech Stack / 사용 기술

- **Frontend**: React, JavaScript, Tailwind CSS, Axios  
- **Backend**: Flask (Python), REST API  
- **Deployment**: Vercel (Frontend), PythonAnywhere (Backend)

---


## Getting Started / 실행 방법

### Frontend

```bash
cd frontend
npm install
npm run dev
