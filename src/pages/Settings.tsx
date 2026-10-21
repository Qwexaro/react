import type React from "react";
import { useUser } from "../context/User.Context.js";
import { useTheme } from "../context/Theme.Context.js";

let Settings = (): React.JSX.Element => {

  const { userName, setUserName } = useUser();

  const { theme, toggleTheme } = useTheme();

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
