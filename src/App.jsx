import { FixedMessenger } from '@sendbird/ai-agent-messenger-react';
import '@sendbird/ai-agent-messenger-react/index.css';
import { getQueryParam } from './utils/getQueryParam';
import './App.css';


// Read IDs from URL query or fallback to .env
const appId = getQueryParam('appId') || import.meta.env.VITE_APP_ID;
const aiAgentId = getQueryParam('agentId') || import.meta.env.VITE_AI_AGENT_ID;

// Read user authentication from query or .env
const userId = getQueryParam('userId') || import.meta.env.VITE_USER_ID;
const accessToken = getQueryParam('accessToken') || import.meta.env.VITE_USER_ACCESS_TOKEN;

// Read image file name from URL query or fallback to default
const imgParam = getQueryParam('img');
const imageSrc = imgParam ? `/${imgParam}` : '/CS.png';

export default function App() {
  return (
    <>
      <div className="image-placeholder">
        <img src={imageSrc} alt="Embedded Full Image" />
      </div>
      <FixedMessenger
        appId={appId}
        aiAgentId={aiAgentId}
        user={{
          userId,
          accessToken
        }}
      />
    </>
  );
}