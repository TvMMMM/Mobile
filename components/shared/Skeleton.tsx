import { Center, VStack, Skeleton } from "native-base";
import React from "react";

const StyledSkeleton = () => {
  return (
    <>
      <Center w="100%" mb={5}>
        <VStack
          w="100%"
          maxW="400"
          borderWidth="1"
          space={8}
          overflow="hidden"
          rounded="md"
          _dark={{
            borderColor: "coolGray.500",
          }}
          _light={{
            borderColor: "coolGray.200",
          }}
        >
          <Skeleton h="40" />
        </VStack>
      </Center>
      <Center w="100%" mb={5}>
        <VStack
          w="100%"
          maxW="400"
          borderWidth="1"
          space={8}
          overflow="hidden"
          rounded="md"
          _dark={{
            borderColor: "coolGray.500",
          }}
          _light={{
            borderColor: "coolGray.200",
          }}
        >
          <Skeleton h="40" />
        </VStack>
      </Center>
      <Center w="100%" mb={5}>
        <VStack
          w="100%"
          maxW="400"
          borderWidth="1"
          space={8}
          overflow="hidden"
          rounded="md"
          _dark={{
            borderColor: "coolGray.500",
          }}
          _light={{
            borderColor: "coolGray.200",
          }}
        >
          <Skeleton h="40" />
        </VStack>
      </Center>

      <Center w="100%" mb={5}>
        <VStack
          w="100%"
          maxW="400"
          borderWidth="1"
          space={8}
          overflow="hidden"
          rounded="md"
          _dark={{
            borderColor: "coolGray.500",
          }}
          _light={{
            borderColor: "coolGray.200",
          }}
        >
          <Skeleton h="40" />
        </VStack>
      </Center>
    </>
  );
};

export default StyledSkeleton;
