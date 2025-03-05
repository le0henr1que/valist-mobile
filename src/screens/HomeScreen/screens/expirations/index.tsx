import { Ionicons } from "@expo/vector-icons";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { RootStackParamList } from "../..";
import SearchIcon from "../../../../../assets/search";
import { useDialogModal } from "../../../../hook/handle-modal/hooks/actions";
import { colors } from "../../../../styles/colors";
import FilterCarousel from "../../../components/FilterCarousel";
import FilterModalize from "../../../components/FilterModalize";
import ProductCard from "../../../components/ProductCard";
import SearchInput from "../../../components/SearchInput";
import Header from "../../components/Header";
import { typography } from "../../../../styles/typography";
import { CustomInput } from "../../../../components/Input";
import { useToast } from "react-native-toast-notifications";

export const productList = [
  {
    name: "Desod Rexona invisible Men 150ml",
    price: 200.0,
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

interface Filters {
  [key: string]: string[];
}

function Expirations() {
  const { control, handleSubmit } = useForm();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const isFocused = useIsFocused();
  const route = useRoute();
  const { productCode } = (route.params as any) || { productCode: "" };

  useLayoutEffect(() => {
    if (isFocused) {
      navigation.getParent()?.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, isFocused]);

  const onSubmit = (data: any) => {
    console.log("Dados enviados:", data);
  };

  const handleBarcodePress = () => {
    console.log("Ação para leitura de código de barras");
    navigation.navigate("BarcodeScannerApp", { isSearch: true });
  };

  const handleFloatingButtonPress = () => {
    console.log("Botão flutuante pressionado");
    navigation.navigate("BarcodeScannerApp", { isSearch: false });
  };

  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const [selectedFilterItem, setSelectedFilterItem] = useState("Todos");
  const modalizeRefs = useRef<{ [key: string]: Modalize | null }>({});
  // const { isOpen, element, title } = useDialogModalState();
  const { handleModal } = useDialogModal();

  const filters: { [key: string]: string[] } = {
    Todos: [],
    Categorias: [
      "Todas as categorias",
      "Mercearia",
      "Padaria",
      "Carnes",
      "Frutas e Legumes",
      "Frios e Laticínios",
      "Higiene",
      "Congelados",
      "Material de Limpeza",
      "Bebidas",
      "Outros",
    ],
    Quantidade: ["Todas", "Com Lotes", "Unitário"],
    Preço: ["Até R$10", "R$10 - R$50", "Acima de R$50"],
    Marca: ["Marca A", "Marca B", "Marca C"],
    Vencimento: ["Todas", "Vencidos", "Próximos ao vencimento", "Em dia"],
  };

  const handleFilterPress = (filter: string) => {
    setSelectedFilter(filter);
    const selectedItems = filters[filter] || [];

    handleModal({
      isOpen: true,
      element: (
        <FilterModalize
          filter={selectedItems}
          onSelectFilter={(item) => {
            setSelectedFilterItem(item);
            console.log("Item selecionado:", item);
          }}
        />
      ),
      title: filter,
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={styles.container}>
        <View style={styles.searchProducts}>
          <SearchInput
            name="search"
            productCode={productCode}
            control={control}
            onBarcodePress={handleBarcodePress}
          />
          <View style={{ height: 32, marginTop: 20 }}>
            <FilterCarousel
              onFilterPress={handleFilterPress}
              filters={Object.keys(filters)}
              selectedFilter={selectedFilter}
            />
          </View>
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Todos os produtos</Text>
          <Text style={styles.badge}>{productList.length}</Text>
        </View>
        {!productList.length && (
          <View
            style={{
              alignItems: "center",
              display: "flex",
              height: "60%",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <SearchIcon />
            <Text style={{ color: "#000", fontWeight: 500, lineHeight: 20 }}>
              Nenhum produto encontrado
            </Text>
          </View>
        )}
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
          <Ionicons name="add" size={16} color="white" />
          <Text style={styles.floatingButtonText}> Adicionar produtos</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
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
    fontFamily: typography.fontFamily.medium,
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
    fontFamily: typography.fontFamily.medium,
    lineHeight: 20,
  },
  floatingButton: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
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
    fontSize: 13,
    fontStyle: "normal",
    fontFamily: typography.fontFamily.semibold,
    lineHeight: 20,
  },
});

export default Expirations;
