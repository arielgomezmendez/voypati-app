import {
  Box,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
  Button,
  Badge,
  Input,
  IconButton,
  HStack,
  Avatar,
  Text,
  TableContainer
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import "./style.css"

const OrdersTable = () => {
  return (
    <Box p={4}>
      {/* Header Section */}
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={2}
          width={"100%"}
          justifyContent="space-between">
          <Box>
            <Heading fontSize="20px" color="#05004E" fontFamily={"Poppins, sans-serif"}>Orders</Heading>
            <Text color="#737791" fontSize="16px">Order Summary</Text>
          </Box>
          {/* Date Filter */}
          <Flex alignItems="center" width={"50%"}>
            <Input type="date" h={"32px"} w={"50%"} borderLeftRadius="4px" borderRightRadius={"none"} />
            <Input type="date" h={"32px"} w={"50%"} borderRightRadius="4px" borderLeftRadius="none" />
          </Flex>
        </Box>
      </Flex>

      {/* Entries Selector */}
      <Flex
        alignItems="center"
        mb={4}
        mt={4}
        w="100%"
        justifyContent={"space-between"}
      >
        <Box display={"flex"} flexDirection={"row"} gap={1}>
          <Select w="100px" defaultValue="10" h="32px" borderRadius="4px">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </Select>
          <Text ml="4" mt="2px" fontSize="16px">Entries per page</Text>
        </Box>
        <HStack spacing={4}>
          {/* Search Box */}
          <Input placeholder="Search" maxW="200px" h="32px" />
        </HStack>
      </Flex>

      {/* Table */}
      <Box p={1}
      >
      {/* Tabla */}
      <Table variant="striped" size="sm" w="100%" fontFamily={"Poppins, sans-serif"} color={"#718096"}>
        <Thead>
          <Tr >
            <Th fontSize="12px">ORDER ID</Th>
            <Th>NAME</Th>
            <Th>PRODUCTS</Th>
            <Th>EMAIL/PHONE</Th>
            <Th>Status</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* Fila 1 */}
          <Tr>
            <Td>O-4516</Td>
            <Td>
              <HStack spacing={3}>
                <Avatar size="sm" name="Segun Adebayo" />
                <Box>
                  Segun Adebayo
                </Box>
              </HStack>
            </Td>
            <Td>REDMI 12 C 4/64G, COLCHON FULL CAMERO</Td>
            <Td>
              <Box>
                <div>sage@gmail.com</div>
                <div>+53 5 784 45 12</div>
              </Box>
            </Td>
            <Td>
              <Badge colorScheme="yellow">PENDING</Badge>
            </Td>
            <Td>
              <Button colorScheme="orange" size="sm" borderRadius={"16px"}>Assign</Button>
            </Td>
          </Tr>
          {/* Fila 2 */}
          <Tr>
            <Td>O-4517</Td>
            <Td>
              <HStack spacing={3}>
                <Avatar size="sm" name="Mark Chandler" />
                <Box>
                  Mark Chandler
                </Box>
              </HStack>
            </Td>
            <Td>BOMBA DE AGUA</Td>
            <Td>
              <Box>
                <div>mark@gmail.com</div>
              </Box>
            </Td>
            <Td>
              <Badge colorScheme="blue">TRANSPORTING</Badge>
            </Td>
            <Td>
              <Button colorScheme="orange" size="sm" borderRadius={"16px"}>Assign</Button>
            </Td>
          </Tr>
          {/* Fila 3 */}
          <Tr>
            <Td>O-4518</Td>
            <Td>
              <HStack spacing={3}>
                <Avatar size="sm" name="Lazar Nikolov" />
                <Box>
                  Lazar Nikolov
                </Box>
              </HStack>
            </Td>
            <Td>OLLA REINA ROYAL 6L</Td>
            <Td>
              <Box>
                <div>lazar@gmail.com</div>
              </Box>
            </Td>
            <Td>
              <Badge colorScheme="orange">PACKAGING</Badge>
            </Td>
            <Td>
              <Button colorScheme="orange" size="sm" borderRadius={"16px"}>Assign</Button>
            </Td>
          </Tr>
          {/* Fila 4 */}
          <Tr>
            <Td>O-4519</Td>
            <Td>
              <HStack spacing={3}>
                <Avatar size="sm" name="Javier Alaves" />
                <Box>
                  Javier Alaves
                </Box>
              </HStack>
            </Td>
            <Td>CAFETERA ELÉCTRICA ROYAL</Td>
            <Td>
              <Box>
                <div>+53 5 365 41 84</div>
              </Box>
            </Td>
            <Td>
              <Badge colorScheme="green">DELIVERED</Badge>
            </Td>
            <Td>
              <Button colorScheme="orange" size="sm" borderRadius={"16px"}>Assign</Button>
            </Td>
          </Tr>
          {/* Fila 5 */}
          <Tr>
            <Td>O-4520</Td>
            <Td>
              <HStack spacing={3}>
                <Avatar size="sm" name="Lazar Nikolov" />
                <Box>
                  Lazar Nikolov
                </Box>
              </HStack>
            </Td>
            <Td>OLLA REINA ROYAL 6L</Td>
            <Td>
              <Box>
                <div>lazar@gmail.com</div>
              </Box>
            </Td>
            <Td>
              <Badge colorScheme="red">CANCELED</Badge>
            </Td>
            <Td>
              <Button colorScheme="orange" size="sm" borderRadius={"16px"}>Assign</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>

      {/* Paginación */}
      <Flex justifyContent="center" alignItems="center" mt={5}>
        <IconButton icon={<ArrowLeftIcon />} aria-label="Previous" />
        <HStack spacing={2} mx={3}>
          <Button variant="outline">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
        </HStack>
        <IconButton icon={<ArrowRightIcon />} aria-label="Next" />
      </Flex>
    </Box>

      {/* Pagination */}
      <Flex justifyContent="space-between" alignItems="center" mt={4}>
        <Button>Previous</Button>
        <HStack>
          <Button variant="link">1</Button>
          <Button variant="link">2</Button>
          <Button variant="link">3</Button>
        </HStack>
        <Button>Next</Button>
      </Flex>
    </Box>
  );
};

export default OrdersTable;
