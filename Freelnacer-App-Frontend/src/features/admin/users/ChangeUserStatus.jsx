import { useForm } from "react-hook-form";
import RHFSelect from "../../../ui/RHFSelectField";
import Loading from "../../../ui/Loading";
import useChangeUserStatus from "./useChangeUserStatus";
import { useQueryClient } from "@tanstack/react-query";

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

function ChangeUserStatus({ userId, onClose }) {

    const { register, handleSubmit } = useForm();
    const { changeUserStatus, isUpdating } = useChangeUserStatus();
    const queryClient = useQueryClient();

    const onSubmit = (data) => {
        changeUserStatus(     //{ userId, ...data },
          { userId, data },  //{userId, data: {status:0, 1, 2}}
          {
            onSuccess: () => {
              onClose();

              queryClient.invalidateQueries({ queryKey: ["users"] });
            },
          }
        );
      };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          label="Change user status"
          register={register}
          required
          options={options}
        />
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

export default ChangeUserStatus
