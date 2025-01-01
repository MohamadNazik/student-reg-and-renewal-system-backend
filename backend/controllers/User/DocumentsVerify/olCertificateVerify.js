export const olCertificateVerify = async (req, res) => {
  try {
    const { extractedText } = req;
    const { Index_OL } = req.body;
    console.log(Index_OL);
    if (!extractedText) {
      return res
        .status(400)
        .send({ success: false, message: "No text provided for analysis" });
    }
    if (!Index_OL) {
      return res
        .status(400)
        .send({ success: false, message: "Index_OL field is required" });
    }
    const lowerCaseExtractedText = extractedText.toLowerCase();
    console.log(lowerCaseExtractedText);

    const predefinedTexts = ["g.c.e.(o/l)", "o/l", "ordinary level"];

    const matches = predefinedTexts.filter((text) =>
      lowerCaseExtractedText.includes(text)
    );
    const index = lowerCaseExtractedText.includes(
      Index_OL.toString().toLowerCase()
    );

    matches.length > 0 && index
      ? res.status(200).send({
          success: true,
          message: "Verified OL Certificate",
          matches,
          index,
        })
      : res.status(200).send({
          success: false,
          message: "Not verified",
          matches,
        });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};
