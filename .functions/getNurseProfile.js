exports.main = async (context, sendResponse) => {
  sendResponse({
    statusCode: 200,
    body: {
      name: "Jane Doe",
      clinic: "Sunshine Aesthetics",
      email: "jane.doe@example.com",
      phone: "+1 (555) 123-4567",
      riskRating: "Medium",
      startDate: "2023-01-15",
      certExpiry: "2024-12-31",
      documents: [
        { name: "CPR Certificate.pdf", url: "#" },
        { name: "Background Check.pdf", url: "#" }
      ]
    }
  });
};
