import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Input } from "../../../../components/Input/Input.style";
import SearchInput from "./components/SearchInput";
import FilterCarousel from "./components/FilterCarousel";
import ProductCard from "./components/ProductCard";
import { colors } from "../../../../styles/colors";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../..";
import { useNavigation } from "@react-navigation/native";
import { Modalize } from "react-native-modalize";
import FilterModalize from "./components/FilterModalize";
import { useDialogModal } from "../../../../hook/handle-modal/hooks/actions";
import { useDialogModalState } from "../../../../hook/handle-modal/hooks/dialog-modal-state";

const productList = [
  {
    name: "Desod Rexona invisible Men 150ml",
    price: 20.0,
    code: "1234567890",
    expiryDate: "12/12/2023",
    image: "https://via.placeholder.com/60",
    quantity: 5,
    category: "Produtos de Higiene",
    expiredDays: 2,
  },
  {
    name: "Outro Produto Exemplo",
    price: 15.0,
    code: "0987654321",
    expiryDate: "10/12/2023",
    image: "https://via.placeholder.com/60",
    quantity: 3,
    category: "Alimentos",
    expiredDays: 5,
  },
  {
    name: "Outro Produto Exemplo",
    price: 15.0,
    code: "0987654321",
    expiryDate: "10/12/2023",
    image: "https://via.placeholder.com/60",
    quantity: 3,
    category: "Alimentos",
    expiredDays: 5,
  },
  {
    name: "Outro Produto Exemplo",
    price: 15.0,
    code: "0987654321",
    expiryDate: "10/12/2023",
    image: "https://via.placeholder.com/60",
    quantity: 3,
    category: "Alimentos",
    expiredDays: 5,
  },
  {
    name: "Outro Produto Exemplo",
    price: 15.0,
    code: "0987654321",
    expiryDate: "10/12/2023",
    image: "https://via.placeholder.com/60",
    quantity: 3,
    category: "Alimentos",
    expiredDays: 5,
  },
  {
    name: "Outro Produto Exemplo",
    price: 15.0,
    code: "0987654321",
    expiryDate: "10/12/2023",
    image: "https://via.placeholder.com/60",
    quantity: 3,
    category: "Alimentos",
    expiredDays: 5,
  },
  {
    name: "Outro Produto Exemplo",
    price: 15.0,
    code: "0987654321",
    expiryDate: "10/12/2023",
    image: "https://via.placeholder.com/60",
    quantity: 3,
    category: "Alimentos",
    expiredDays: 5,
  },
];

function Expirations() {
  const { control, handleSubmit } = useForm();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onSubmit = (data: any) => {
    console.log("Dados enviados:", data);
  };

  const handleBarcodePress = () => {
    console.log("Ação para leitura de código de barras");
    navigation.navigate("BarcodeScannerApp");
  };

  const handleFloatingButtonPress = () => {
    console.log("Botão flutuante pressionado");
    navigation.navigate("BarcodeScannerApp");
  };

  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const modalizeRefs = useRef<{ [key: string]: Modalize | null }>({});
  // const { isOpen, element, title } = useDialogModalState();
  const { handleModal } = useDialogModal();

  const filters = [
    "Todos",
    "Categorias",
    "Quantidade",
    "Preço",
    "Marca",
    "Cor",
  ];

  const handleFilterPress = (filter: string) => {
    setSelectedFilter(filter);
    handleModal({
      isOpen: true,
      element: (
        <FilterModalize
          filter={[
            "item 1d",
            "item 2",
            "item 3",
            "item 4",
            "item 5",
            "item 6",
            "item 7",
            "item 8",
            "item 9",
            "item 10",
            "item 11",
            "item 12",
            "item 13",
            "item 14",
            "item 15",
            "item 16",
            "item 17",
            "item 18",
            "item 19",
            "item 20",
            "item 21",
          ]}
        />
      ),
      title: selectedFilter,
    });
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchProducts}>
          <SearchInput
            name="search"
            control={control}
            onBarcodePress={handleBarcodePress}
          />
          <View style={{ height: 32, marginTop: 20 }}>
            <FilterCarousel
              onFilterPress={handleFilterPress}
              filters={filters}
              selectedFilter={selectedFilter}
            />
          </View>
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Todos os produtos</Text>
          <Text style={styles.badge}>1.000</Text>
        </View>
        <ScrollView
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {productList.map((product, index) => (
            <View key={index} style={{ marginBottom: 16 }}>
              <ProductCard product={product} />
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={handleFloatingButtonPress}
        >
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.floatingButtonText}>Adicionar produtos</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center",
  },
  searchProducts: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 24,
  },
  badge: {
    display: "flex",
    paddingHorizontal: 6,
    paddingVertical: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    backgroundColor: "#F3F4F6",
  },
  containerTitle: {
    flexDirection: "row",
    display: "flex",
    gap: 7,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 16,
  },
  title: {
    color: "#000",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "semibold",
    lineHeight: 20,
  },
  floatingButton: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    position: "absolute",
    bottom: 20,
    right: 15,
    height: 44,
    padding: 12,
    borderRadius: 30,
    backgroundColor: colors.primary["600"],
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  floatingButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 20,
  },
});

export default Expirations;