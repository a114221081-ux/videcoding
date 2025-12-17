import Chatbot from './components/Chatbot'


export default function App() {
return (
<>
<header className="header">企業官網</header>


<section>
<h2>產品與服務</h2>
<p>提供 AI 客服、網站建置、系統整合</p>
</section>


<section>
<h2>關於我們</h2>
<p>專注於 AI 技術導入與數位轉型</p>
</section>


<Chatbot />
</>
)
}