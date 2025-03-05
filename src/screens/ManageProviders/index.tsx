import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { useRef, useState, useCallback, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../styles/colors";
import SearchIcon from "../../../assets/icons/search";
import { CardProviders } from "./components/CardProviders";
import Button from "../../components/Button";
import { useDialogModal } from "../../hook/handle-modal/hooks/actions";
import { FormProviderAction } from "./components/FormProviderAction";
import { useGetSuppliersQuery } from "../../services/supplier";
import { useSupplierFilterActions } from "./ducks/filter/hooks/actions";
import { debounce } from "lodash";
import { useFilterState } from "./ducks/filter/hooks/filterState";
import EmptyIcon from "../../../assets/icons/not-exist";
const PER_PAGE = 10;

export default function ManageProviders() {
  const inputRef = useRef<TextInput>(null);
  const { control } = useForm();
  const { handleModal } = useDialogModal();
  const filterState = useFilterState();
  const [data, setData] = useState<any[]>([]);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const { filters } = filterState || { filters: {} };
  const {
    data: supplier,
    refetch,
    isFetching,
    isLoading,
  } = useGetSuppliersQuery({
    search: {
      search: filters.search,
      page: filters?.page || 1,
      perPage: PER_PAGE,
    },
  });

  const { updateFilter } = useSupplierFilterActions();

  const handleAddProvider = () => {
    handleModal({
      isOpen: true,
      element: <FormProviderAction />,
      title: "Adicionar Fornecedor",
    });
  };

  const handleInputChange = (value: string) => {
    updateFilter({ key: "search", value });
  };

  const debouncedHandleInputChange = useCallback(
    debounce(handleInputChange, 500),
    []
  );

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    setData([]);
    if (supplier?.data) {
      setData((prevData) => {
        const existingIds = new Set(prevData.map((item) => item.id));
        const newData = supplier.data.filter(
          (item: any) => !existingIds.has(item.id)
        );
        return [...prevData, ...newData];
      });
    }

    setIsFetchingMore(false);
  }, [supplier]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch().finally(() => {
      setRefreshing(false);
    });
  }, [refetch]);

  const fetchMoreData = () => {
    if (isFetchingMore || !supplier?.meta?.next) return;

    setIsFetchingMore(true);
    updateFilter({ key: "page", value: (filters?.page ?? 1) + 1 });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchProducts}>
        <View style={styles.containerInput}>
          <TouchableOpacity onPress={handleFocus}>
            <SearchIcon />
          </TouchableOpacity>
          <Controller
            control={control}
            name={"search"}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                ref={inputRef}
                style={styles.input}
                placeholder="Procurar por produto ou código"
                placeholderTextColor="#999"
                onChangeText={(text) => {
                  onChange(text);
                  debouncedHandleInputChange(text);
                }}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
        </View>
      </View>
      {data.length === 0 && !isLoading && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            height: "100%",
          }}
        >
          <EmptyIcon />
          <Text
            style={{
              color: "#000",
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: 20,
            }}
          >
            Nenhum produto encontrado
          </Text>
        </View>
      )}
      <FlatList
        style={styles.scrollCard}
        data={data}
        renderItem={({ item }) => (
          <CardProviders key={item.id} supplier={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReached={fetchMoreData}
        onEndReachedThreshold={0.2}
        ListFooterComponent={
          isFetchingMore ? (
            <ActivityIndicator size="large" color={colors.primary[500]} />
          ) : null
        }
      />

      <View style={styles.footerButtom}>
        <Button onPress={handleAddProvider}>Adicionar fornecedor</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scrollCard: {
    width: "100%",
    flex: 1,
    padding: 20,
    marginTop: -40,
  },
  footerButtom: {
    display: "flex",
    width: "100%",
    padding: 20,
    justifyContent: "center",
    gap: 16,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.neutral["100"],
    borderRadius: 8,
    gap: 8,
    paddingHorizontal: 10,
    height: 50,
    width: "100%",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.neutral["500"],
  },
  searchProducts: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 20,
    marginBottom: 24,
  },
});
