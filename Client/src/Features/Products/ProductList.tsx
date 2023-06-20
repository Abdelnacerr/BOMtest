import * as React from 'react';
import { DataTable, Text } from 'react-native-paper';
import { useGetProductsQuery } from '../../Redux/Slices/productSlice';

const optionsPerPage = [2, 3, 4];

const ProductList = () => {
  const { data, error, isLoading } = useGetProductsQuery()

  return (
    <>
      <Text variant="displayMedium" style={{ textAlign: 'center' }}>Products</Text>
      <DataTable>
        <DataTable.Header >
        <DataTable.Title >Product</DataTable.Title>
        <DataTable.Title >Description</DataTable.Title>
        <DataTable.Title numeric>Price</DataTable.Title>
        </DataTable.Header>

        {data?.map((item) => (
          <DataTable.Row key={item.productId}>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell >{item.description}</DataTable.Cell>
            <DataTable.Cell numeric>{item.unitPrice.toFixed(2)}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </>
  );
}

export default ProductList;
