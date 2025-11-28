import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";

const TextInputsScreen = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
	});

	// const isIOS = Platform.OS === "ios";

	return (
		<KeyboardAvoidingView behavior={"height"}>
			<ScrollView>
				<ThemedView margin>
					<ThemedCard className="mb-5">
						<ThemedTextInput
							placeholder="Full Name"
							autoCapitalize={"words"}
							autoCorrect={false}
							onChangeText={(text) => setForm({ ...form, name: text })}
						/>

						<ThemedTextInput
							placeholder="Email"
							keyboardType="email-address"
							autoCorrect={false}
							onChangeText={(text) => setForm({ ...form, email: text })}
						/>

						<ThemedTextInput
							placeholder="Phone"
							keyboardType="phone-pad"
							autoCorrect={false}
							onChangeText={(text) => setForm({ ...form, phone: text })}
						/>
					</ThemedCard>

					<ThemedCard>
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>
					<ThemedCard>
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>
					<ThemedCard>
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>
					<ThemedCard>
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>
					<ThemedCard>
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>
					<ThemedCard>
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>
					<ThemedCard>
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>
					<ThemedCard>
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>
					<ThemedCard>
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>
				</ThemedView>

				<ThemedCard
					style={{
						paddingBottom: 100,
					}}
				>
					<ThemedTextInput
						placeholder="Phone"
						keyboardType="phone-pad"
						autoCorrect={false}
						onChangeText={(text) => setForm({ ...form, phone: text })}
					/>
				</ThemedCard>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};
export default TextInputsScreen;
