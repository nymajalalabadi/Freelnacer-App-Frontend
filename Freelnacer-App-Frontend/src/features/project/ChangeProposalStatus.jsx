import { useParams } from "react-router-dom";
import RHFSelect from "../../ui/RHFSelectField";
import { useForm } from "react-hook-form";
import Loading from "../../ui/Loading";
import useChangeProposalStaus from "./useChangeProposalStaus";
import { QueryClient } from "@tanstack/react-query";


const options = [
    {
      label: "Rejected",
      value: 0,
    },
    {
      label: "Awaiting approval",
      value: 1,
    },
    {
      label: "Confirmed",
      value: 2,
    },
];

  
function ChangeProposalStatus({ proposalId, onClose }) {
    const { id: projectId } = useParams();
    const { chnageProposalStatus, isUpdating } = useChangeProposalStaus();
    const { register, handleSubmit } = useForm();


  const onSubmit = (data) => {
    chnageProposalStatus(
      { id: proposalId, data },
      {
        onSuccess: () => {
          onClose();
          QueryClient.invalidateQueries({ queryKey: ["project", projectId] });
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect name="status" label="Change state" register={register} required options={options} />
        <div className="!mt-8">
          {isUpdating ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default ChangeProposalStatus
