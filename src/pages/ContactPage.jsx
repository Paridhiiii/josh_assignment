import { Box, Grid } from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const ContactPage = () => {
  return (
    <Box p={8}>
      <Grid templateColumns="2fr 1fr" gap={6}>
        <ContactForm />
        <ContactInfo />
      </Grid>
    </Box>
  );
};

export default ContactPage;
