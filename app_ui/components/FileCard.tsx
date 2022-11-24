import {AiFillCheckCircle} from "react-icons/ai";
import {UploadedFile} from "../public/types";
import {documentTypes} from "../public/staticstuff";
import {MdOutlinePending} from "react-icons/md";
import {Tooltip} from "@mui/material";

export const FileCard = ({file}: {file: UploadedFile}) => {
    return (
        <div className="flex flex-col shadow-md rounded-[15px] hover:cursor-pointer hover:shadow-xl duration-500">
            <img src="/docock.svg" className="h-[150px] w-full object-cover" alt="doc" />
            <div className="flex flex-row p-[10px] w-full items-center">
                <div className="flex-auto">
                    <div className="font-bold text-[15px]">{`${file.fileid}.${file.extension}`}</div>
                    <div>{documentTypes[file.filecat - 1]}</div>
                </div>
                {
                    file.status == 1 ? (
                        <Tooltip title="Approved">
                            <div>
                                <AiFillCheckCircle className="text-green-500" size={30}/>
                            </div>
                        </Tooltip>
                    ) : (
                        <Tooltip title="Pending approval">
                            <div>
                                <MdOutlinePending className="text-orange-400" size={30} />
                            </div>
                        </Tooltip>
                    )
                }
            </div>
        </div>
    )
}