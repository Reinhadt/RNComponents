import React from "react";
import { Text, TextProps } from "react-native";

type TextType = "normal" | "h1" | "h2" | "semi-bold" | "link";

interface Props extends TextProps {
	className?: string;
	type?: TextType;
}

const ThemedText = ({ className, type, ...rest }: Props) => {
	// className="mt-10 text-3xl text-light-primary dark:text-dark-text"

	const textType = {
		normal: "font-normal",
		h1: "text-3xl",
		h2: "text-xl",
		"semi-bold": "font-bold",
		link: "underline",
	};

	return (
		<Text
			className={[
				"text-light-primary dark:text-dark-text",
				type ? textType[type] : undefined,
				className,
			].join(" ")}
			{...rest}
		/>
	);
};

export default ThemedText;
