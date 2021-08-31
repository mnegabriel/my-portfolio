<script>
    import WrapperContainer from "./lib/WrapperContainer.svelte";
    import TheHeader from "./lib/TheHeader.svelte";
    import MainContent from "./lib/MainContent.svelte";
    import TheFooter from "./lib/TheFooter.svelte";
</script>

<WrapperContainer>
    <TheHeader />
</WrapperContainer>

<WrapperContainer>
    <MainContent />
</WrapperContainer>

<WrapperContainer>
    <TheFooter />
</WrapperContainer>
