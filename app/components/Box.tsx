import React, { ReactNode } from 'react';

interface BoxProps {
	children: ReactNode; // Boxコンポーネントの中に配置される要素
	className?: string; // 追加のクラス名
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
	// 追加のクラス名が指定されていれば、それを適用する
	const classes = `border border-gray-300 p-4 rounded-md ${className}`;

	return <div className={classes}>{children}</div>;
};

export default Box;
