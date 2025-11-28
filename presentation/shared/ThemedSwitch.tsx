import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { Platform, Pressable, View } from "react-native";
import { Switch } from "react-native-gesture-handler";
import ThemedText from "./ThemedText";

interface Props {
	text?: string;
	value: boolean;
	onValueChange: (value: boolean) => void;
	className?: string;
}

const isAndroid = Platform.OS === "android";

const ThemedSwitch = ({ text, value, className, onValueChange }: Props) => {
	const switchActiveColor = useThemeColor({}, "primary");

	return (
		<Pressable
			className={`mx-2 flex flex-row items-center, justify-between active:opacity-80 ${className}`}
			onPress={() => onValueChange(!value)}
		>
			{text ? <ThemedText>{text}</ThemedText> : <View />}
			<Switch
				thumbColor={isAndroid ? switchActiveColor : ""}
				value={value}
				onValueChange={onValueChange}
				trackColor={{
					false: "grey",
					true: switchActiveColor,
				}}
			/>
		</Pressable>
	);
};

export default ThemedSwitch;
