"use client";

import { useState } from "react";
import { TextInput, Platform, Modal } from "react-native";
import { Input } from "./Input.style";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useDialogModal } from "../../hook/handle-modal/hooks/actions";
import { Text } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import DateTimePicker from "@react-native-community/datetimepicker";

type Variant = "normal" | "password" | "option" | "date";
interface CustomInputProps {
  variant?: Variant;
  errors?: any;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  onBlur?: () => void;
  name: string;
  options: { id: string; label: string }[];
}

export const CustomInput = ({
  variant,
  errors,
  options,
  ...props
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const { handleModal } = useDialogModal();
  const hasError = errors && errors[props?.name];
  const [optionSeted, setOptionSeted] = useState<any | null>(null);

  // Format date as DD/MM/YYYY
  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const openOptions = () => {
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
            {options.map((option) => (
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

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showAndroidModal, setShowAndroidModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tempDate, setTempDate] = useState<Date | null>(null);

  const handleDateChange = (event: any, date?: Date) => {
    if (Platform.OS === "android") {
      if (event.type === "set") {
        // User confirmed the date selection
        if (date) {
          setTempDate(date);
        }
      } else if (event.type === "dismissed") {
        // User cancelled the date selection
        setShowAndroidModal(false);
      }
    } else {
      // For iOS, just update the temporary date
      if (date) {
        setTempDate(date);
      }
    }
  };

  const openDatePicker = () => {
    if (Platform.OS === "ios") {
      // Set tempDate to current selectedDate or new Date
      setTempDate(selectedDate || new Date());

      // For iOS, use the existing modal with a confirmation button
      handleModal({
        isOpen: true,
        element: (
          <View
            style={{
              paddingVertical: 16,
              width: "100%",
              alignItems: "center",
              width: "100%",
            }}
          >
            <DateTimePicker
              value={tempDate || new Date()}
              mode="date"
              display="spinner"
              onChange={(event, date) => {
                if (date) {
                  setTempDate(date);
                }
              }}
              style={{ width: "100%" }}
            />
            <View
              style={{ marginTop: 16, paddingHorizontal: 16, width: "100%" }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: colors.primary?.["500"] || "#4F46E5",
                  paddingVertical: 12,
                  width: "100%",
                  borderRadius: 8,
                  alignItems: "center",
                }}
                onPress={() => {
                  if (tempDate) {
                    setSelectedDate(tempDate);
                    if (props.onChangeText) {
                      props.onChangeText(formatDate(tempDate));
                    }
                  }
                  handleModal({ isOpen: false });
                }}
              >
                <Text style={{ color: "white", fontWeight: "600" }}>
                  Selecionar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ),
      });
    } else {
      // For Android, use our custom modal with the date picker
      setTempDate(selectedDate || new Date());
      setShowAndroidModal(true);
    }
  };

  const confirmAndroidDate = () => {
    if (tempDate) {
      setSelectedDate(tempDate);
      if (props.onChangeText) {
        props.onChangeText(formatDate(tempDate));
      }
    }
    setShowAndroidModal(false);
  };

  const inputVariant: any = {
    date: () => (
      <View>
        <TouchableOpacity onPress={openDatePicker}>
          <TextInput
            style={[
              isFocused
                ? { ...Input.focusedStyle }
                : hasError
                ? Input.styleError
                : Input.style,
            ]}
            value={selectedDate ? formatDate(selectedDate) : ""}
            placeholder={props.placeholder || "Selecione a data"}
            editable={false}
            pointerEvents="none"
          />
        </TouchableOpacity>

        {/* Custom modal for Android */}
        {Platform.OS === "android" && showAndroidModal && (
          <Modal
            transparent={true}
            animationType="fade"
            visible={showAndroidModal}
            onRequestClose={() => setShowAndroidModal(false)}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <View
                style={{
                  width: "80%",
                  backgroundColor: "white",
                  borderRadius: 10,
                  padding: 20,
                  alignItems: "center",
                  elevation: 5,
                }}
              >
                <DateTimePicker
                  value={tempDate || new Date()}
                  mode="date"
                  display="calendar"
                  onChange={handleDateChange}
                  style={{ width: 300, height: 300 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: 20,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#f2f2f2",
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      borderRadius: 5,
                    }}
                    onPress={() => setShowAndroidModal(false)}
                  >
                    <Text>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.primary?.["500"] || "#4F46E5",
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      borderRadius: 5,
                    }}
                    onPress={confirmAndroidDate}
                  >
                    <Text style={{ color: "white" }}>Selecionar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        )}
      </View>
    ),

    option: () => (
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
    ),
    normal: () => (
      <TextInput
        style={[
          isFocused
            ? { ...Input.focusedStyle }
            : hasError
            ? Input.styleError
            : Input.style,
        ]}
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    ),
    password: () => (
      <TouchableOpacity style={Input.inputPassword}>
        <TextInput
          secureTextEntry={!isPasswordVisible}
          style={[
            isFocused
              ? { ...Input.focusedStyle }
              : hasError
              ? Input.styleError
              : Input.style,
          ]}
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Ionicons
          onPress={() => setPasswordVisible(!isPasswordVisible)}
          name={isPasswordVisible ? "eye" : "eye-off"}
          size={20}
          style={Input.iconEye}
          color="gray"
        />
      </TouchableOpacity>
    ),
  };

  return inputVariant[variant as any]
    ? inputVariant[variant as any]()
    : inputVariant.normal();
};
