import { useState } from "react";
import { useDialogModal } from "../../hook/handle-modal/hooks/actions";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Input } from "./Input.style";
import { typography } from "../../styles/typography";
import { colors } from "../../styles/colors";
import Svg, { Path } from "react-native-svg";

export function OptionsInput({ options, errors, ...props }: any) {
  const [isFocused, setIsFocused] = useState(false);
  const { handleModal } = useDialogModal();
  const hasError = errors && errors[props?.name];
  const [optionSeted, setOptionSeted] = useState<any | null>(null);

  const openOptions = () => {
    setIsFocused(true);
    handleModal({
      isOpen: true,
      element: (
        <View style={{ paddingVertical: 16, width: "100%" }}>
          <ScrollView
            style={{
              maxHeight: 200,
              marginTop: 16,
              marginBottom: 16,
              width: "100%",
            }}
          >
            {options?.map((option: any) => (
              <TouchableOpacity
                key={option?.id}
                style={{
                  paddingVertical: 12,
                  paddingHorizontal: 36,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  width: "100%",
                  borderBottomColor: "#E5E7EB",
                  borderBottomWidth: 0.5,
                }}
                onPress={() => {
                  setOptionSeted(option);
                  handleModal({ isOpen: false });
                }}
              >
                <Text
                  style={{
                    color: "#111827",
                    fontFamily: "Inter",
                    fontSize: 16,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: 24,
                  }}
                >
                  {option?.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ),
    });
  };

  return (
    <View style={{ position: "relative" }}>
      <TouchableOpacity onPress={() => openOptions()}>
        <TextInput
          style={[
            isFocused
              ? { ...Input.focusedStyle }
              : hasError
              ? Input.styleError
              : Input.style,

            { color: "white" },
          ]}
          {...props}
          value={optionSeted?.id || ""}
          editable={false}
          pointerEvents="none"
        />
        <View style={{ position: "absolute", top: 12, left: 16, right: 16 }}>
          <Text
            style={{
              fontSize: typography.size.base,
              lineHeight: typography.lineHeight.base,
              color: colors.neutral["900"],
            }}
          >
            {optionSeted?.label}
          </Text>
        </View>

        <View style={{ position: "absolute", right: 10, top: 15 }}>
          <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
            <Path
              d="M13.3538 6.95336L8.35378 11.9534C8.30734 11.9998 8.2522 12.0367 8.1915 12.0619C8.1308 12.0871 8.06574 12.1 8.00003 12.1C7.93432 12.1 7.86926 12.0871 7.80856 12.0619C7.74786 12.0367 7.69271 11.9998 7.64628 11.9534L2.64628 6.95336C2.57627 6.88343 2.52859 6.79431 2.50926 6.69726C2.48994 6.60022 2.49984 6.49963 2.53772 6.40821C2.57559 6.3168 2.63974 6.23868 2.72204 6.18375C2.80433 6.12881 2.90108 6.09953 3.00003 6.09961H13C13.099 6.09953 13.1957 6.12881 13.278 6.18375C13.3603 6.23868 13.4245 6.3168 13.4623 6.40821C13.5002 6.49963 13.5101 6.60022 13.4908 6.69726C13.4715 6.79431 13.4238 6.88343 13.3538 6.95336Z"
              fill="#1F2937"
            />
          </Svg>
        </View>
      </TouchableOpacity>
    </View>
  );
}
