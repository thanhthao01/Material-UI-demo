import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const contacts = [
  {
    name: "John Doe",
    username: "@johndoe",
    avatar: "https://mui.com/static/images/avatar/1.jpg",
  },
  {
    name: "Jane Smith",
    username: "@janesmith",
    avatar: "https://mui.com/static/images/avatar/2.jpg",
  },
  {
    name: "Mike Johnson",
    username: "@mikejohnson",
    avatar: "https://mui.com/static/images/avatar/3.jpg",
  },
  {
    name: "Emily Davis",
    username: "@emilydavis",
    avatar: "https://mui.com/static/images/avatar/4.jpg",
  },
];

function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "300px",
        }}
      >
        {/* Thanh tìm kiếm */}
        <TextField
          placeholder="Tìm kiếm"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#808080" }} />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            marginBottom: "16px",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#16181c",
              color: "#f5f5f5",
              borderRadius: "25px",
              "& fieldset": { border: "none" },
            },
            "& .MuiInputBase-input": { color: "#f5f5f5" },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#808080" },
          }}
        />

        {/* Tạo khoảng cách 30px */}
        <Box sx={{ height: "20px" }} />

        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "25px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "16px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginBottom: "150px",
          }}
        >
          {/* Danh sách người liên hệ gần đây */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "8px",
                color: "black",
              }}
            >
              Người liên hệ gần đây
            </Typography>
            <List>
              {filteredContacts.map((contact, index) => (
                <ListItem key={index} sx={{ padding: "8px 0" }}>
                  <ListItemAvatar>
                    <Avatar alt={contact.name} src={contact.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        color: "black",
                      },
                    }}
                    primary={contact.name}
                    secondary={contact.username}
                  />
                </ListItem>
              ))}
            </List>
            {filteredContacts.length === 0 && (
              <Typography
                sx={{
                  color: "#808080",
                  textAlign: "center",
                  marginTop: "16px",
                }}
              >
                Không tìm thấy kết quả
              </Typography>
            )}
            <Box sx={{ marginTop: "8px" }}>
              <Link
                href="#"
                sx={{
                  color: "blue",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                <Typography>Xem thêm</Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
