# theMoonDevs_fragmentation



Final Parent component file is placed under after/ at ./after/components/BurnPage.tsx

What I considered while fragmenting:
- reusability
- abstraction
- seperation, therefore easy maintenance


Choices I made:
- Left all the states in Parent component(BurnPage.tsx) itself and passed them down to child components whereever required.

For Hooks:
- I have created two hooks - useCoinData and useFetchTransaction
- useFetchTransaction is used twice in the code with mintute changes.
- Once to refetch the transactions(refetchTransactions funciton which is called in another function).
- Second in a useEffect to fetch the transactions which have the dependencies of walletChain and oldToken.
- So extracted this logic to a single hook which we can use twice
- useCoinData - this is used to fetch coin data from the API, I just felt this logic could be used at multiple places.

For components :
- I have seperated them to make the code look cleaner and simpler.
- One component named `BurnBar` which have the functionality of changing and displaying burn amount.
- Broken down the Status section to three components namely SupplyBar - stats of supply, SupplyLabelList to display the list of supplies, SupplyTopBar - contract info.
