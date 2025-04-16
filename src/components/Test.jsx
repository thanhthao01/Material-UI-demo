import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { FiLogIn } from 'react-icons/fi';

function Test() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">

        <Button
          variant="contained"
          color="primary"
        >
          Đăng nhập
        </Button>

        <button className="flex items-center gap-2 px-4 py-2 my-3 text-white bg-blue-600 rounded hover:bg-blue-500">
          Đăng nhập
        </button>

        <button class="btn">
          Đăng nhập
        </button>

      </div>
    </>
  )
}

export default Test;