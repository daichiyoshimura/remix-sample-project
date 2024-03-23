import { Link } from "@remix-run/react";
import Logo from './Logo'; // ロゴコンポーネントのインポート

interface HeaderProps {
  // ヘッダーに関するプロパティの型定義
}

const Header = (props: HeaderProps) => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">
          <Logo /> {/* ロゴコンポーネントの表示 */}
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">About</Link>
            </li>
            {/* 他のナビゲーション項目を追加 */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;