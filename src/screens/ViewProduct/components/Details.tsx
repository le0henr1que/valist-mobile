import { StyleSheet, Text, View } from "react-native";

function Details() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Código do produto</Text>
          <Text style={styles.value}>121213223323232</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Data de validade</Text>
          <Text style={styles.value}>12/12/2002</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Lote</Text>
          <Text style={styles.value}>ASESD</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Quantidade de itens</Text>
          <Text style={styles.value}>124 itens</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Valor Unitário</Text>
          <Text style={styles.value}>R$ 20,00</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Valor Total do lote</Text>
          <Text style={styles.value}>R$ 200,000</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Categoria</Text>
          <Text style={styles.value}>Mercearia</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Status</Text>
          <Text style={[styles.value, styles.status]}>Vencido</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Loja do produto</Text>
          <Text style={styles.value}>Loja 1</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Fornecedor</Text>
          <Text style={styles.value}>AJ Alimentos</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  column: {
    flex: 1,
    marginHorizontal: 8,
  },
  label: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: "#000",
  },
  status: {
    color: "red",
    fontWeight: "bold",
  },
});

export default Details;
