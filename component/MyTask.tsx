import React from "react";
import CustomTask from "./CustomTask";
import SubmitDocument from "./SubmitDocument";

const mytask = () => {
  return (
    <div className="flex justify-around mt-30">
      <CustomTask />
      <SubmitDocument
        TaskTitle="Document Submission."
        listclass="list-disc  pl-6 space-y-1 list-inside my-2 "
        objective="To submit required documents for something important"
        TaskDescription="Review the list of documents required for submission and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and verify the accepted file formats. Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper processing."
        AdditionalNotes=" AdditionalNotes"
        Deadline=" End of Day"
        FirstList="Ensure that the documents are authentic and up-to-date."
        secondtList="Maintain confidentiality and security of sensitive information during the submission process."
        thirdList="If there are specific guidelines or deadlines for submission, adhere to them diligently."
      />
    </div>
  );
};
export default mytask;
