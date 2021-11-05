import React from 'react'
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  Button,
  View,
} from 'native-base'
import { withNavigation } from '@react-navigation/native'

export const SubcategoryList = ({ KivaClassDetails }) => {
  console.log('kivaInvest', KivaClassDetails)
  const data = [
    {
      class: 'A',
      name: "Animata's Farmers",
      totalInvestors: '3,300',
    },
    {
      class: 'B',
      name: 'Aranya Agricultural',
      totalInvestors: '2000',
    },
    {
      class: 'C',
      name: 'Regeneration Int.',
      totalInvestors: '1,300',
    },
    {
      class: 'D',
      name: 'Savory Network',
      totalInvestors: '1700',
    },
    {
      class: 'E',
      name: 'Grounded',
      totalInvestors: '3,300',
    },
  ]
  // const kivaInvest = () => navigation.navigate('Invest')

  return (
    <Box
      w={{
        base: '100%',
        md: '25%',
      }}
    >
      <Heading fontSize="xl" pl="0" pt="1" pb="3">
        Farming
      </Heading>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: 'gray.600',
            }}
            borderColor="coolGray.200"
            pl="0"
            pr="4"
            py="2"
            px="20"
          >
            <HStack space={3} justifyContent="space-between">
              <Button size="lg" pb="2" pt="2" backgroundColor="#086ae9">
                CLASS{item.class}
              </Button>

              <VStack style={{ width: '44%' }}>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.name}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                >
                  Investors: {item.totalInvestors}
                </Text>
              </VStack>
              <Spacer />
              <View>
                <Button
                  size="sm"
                  backgroundColor="#0FA429"
                  onPress={KivaClassDetails}
                >
                  Invest
                </Button>
              </View>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  )
}

export default ({ KivaClassDetails }) => {
  return (
    <NativeBaseProvider>
      <Center flex="1">
        <SubcategoryList KivaClassDetails={KivaClassDetails} />
      </Center>
    </NativeBaseProvider>
  )
}
