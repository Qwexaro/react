import type React from "react";
import { useUser } from "../context/User.Context.js";
import { useTheme } from "../context/Theme.Context.js";
import type { UserContextType } from "../context/interfaces/User.Context.Type.js";
import type { ThemeContextType } from "../context/interfaces/Theme.Context.Type.js";
import { useRef, useState } from "react";

let Settings = (): React.JSX.Element => {
  
  const { userName, setUserName, avatar, setAvatar }: UserContextType = useUser();
  
  const [error, setError] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  
  const { theme, toggleTheme }: ThemeContextType = useTheme();

  let handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    
    const file = event.target.files?.[0];
    
    if (!file) return;

    if (!file.type.startsWith("image/")) {
    
      setError('Выберите файл изображения');
      
      event.target.value = '';
      
      return;
    
    }

    if (file.size > 1024 * 1024) { 
    
      setError('Размер данного изображения не должен превышать 1мб'); 
    
      event.target.value = '';
      
      return;
    
    }

    const reader: FileReader = new FileReader();

    reader.onload = (): void => {
      
      if (typeof reader.result === 'string') {
        
        setAvatar(reader.result);
        
        setError('');
      
      }

    }
    reader.onerror = (): void => setError('Не удалось прочитать изображение');
    
    reader.readAsDataURL(file);
  }

  let removeAvatar = (): void => {
    
    setAvatar('');

    setError('');

    if (fileInputRef.current) fileInputRef.current.value = '';
    
  }

  return (
    <section className="page">
      <h1>Settings</h1>

      <div className="settings-section">
        <label>
          Имя пользователя
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </label>
        <p>Текущее имя: {userName}</p>

        <div className="settings-avatar">
          {avatar ? (
            <img src={avatar} alt="avatar" className="avatar-preview" /> 
          ) : (
            <div className="avatar-placeholder"> 
              {userName.charAt(0).toUpperCase() || "?"} 
            </div> 
          )}

          <div className="avatar-controls">
            <h3>Фотография профиля</h3>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleAvatarChange} />
            <p>Изображение до 1мб</p>
            {avatar && (<button type="button" onClick={removeAvatar}>Удалить фотографию</button>)}
          </div>
        </div>
      </div>

      <div className="settings-section" style={{ marginTop: "24px" }}>
        <h3>Тема оформления</h3>
        <p>Текущая тема: <strong>{theme === "light" ? "Светлая" : "Тёмная"}</strong></p>
        <button type="button" onClick={toggleTheme}>
          Переключить на {theme === "light" ? "тёмную" : "светлую"}
        </button>
      </div>
    </section>
  );
}

export default Settings;
