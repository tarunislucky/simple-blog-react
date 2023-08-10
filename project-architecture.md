## so how does state and API work together in this project ?

- when we send CREATE, UPDATE , DELETE , first we send API request then on success we update state.( using redux action thunks)
- in the above case we can show a spinner (sending....) on the page we are sending API request.

- when we reload page , we READ from api in the App component

## why child component renders before useEffect of parent ?

useEffect is executed after first render. so on first render we execute the parent and child with empty data. then load data using useEffect in App, then set state and trigger another render .

since components are rendered first before API request. we can show a spinner (loading...)
