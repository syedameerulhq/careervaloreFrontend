"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  Typography,
  TextField,
  Switch,
  FormControlLabel,
} from "@mui/material";

export default function JobTable({ jobs, onDelete, onEdit }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedField, setSelectedField] = useState({ key: "", value: "" });
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  const truncateText = (text, maxLength = 10) => {
    if (typeof text !== "string" || text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const handleMoreClick = (key, value) => {
    setSelectedField({ key, value });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedField({ key: "", value: "" });
  };

  const handleEditClick = (job) => {
    setEditingJob({
      ...job,
      description: Array.isArray(job.description) ? job.description : [job.description || ""],
      requirements: job.requirements || [""],
      rolesAndResponsibilities: job.rolesAndResponsibilities || [""],
      selectionProcess: job.selectionProcess || [""],
    });
    setEditDialogOpen(true);
  };

  const handleEditChange = (field, value, index) => {
    setEditingJob((prev) => {
      if (Array.isArray(prev[field])) {
        const newArray = [...prev[field]];
        newArray[index] = value;
        return { ...prev, [field]: newArray };
      }
      return { ...prev, [field]: value };
    });
  };

  const handleAddField = (field) => {
    setEditingJob((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const handleEditSubmit = () => {
    if (onEdit) {
      const updatedJob = {
        ...editingJob,
        description: editingJob.description.filter(Boolean),
        requirements: editingJob.requirements.filter(Boolean),
        rolesAndResponsibilities: editingJob.rolesAndResponsibilities.filter(Boolean),
        selectionProcess: editingJob.selectionProcess.filter(Boolean),
      };
      onEdit(updatedJob);
    } else {
      console.error("onEdit prop is not provided");
    }
    setEditDialogOpen(false);
    setEditingJob(null);
  };

  const handleEditClose = () => {
    setEditDialogOpen(false);
    setEditingJob(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Shift") {
      // Allow Shift key functionality
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="job table">
          <TableHead sx={{ bgcolor: "#1976d2", color: "white" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Title</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Company</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Image</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Location</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Description</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Requirements</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Type</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Sector</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Salary</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Deadline</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Active</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Created At</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Pinned</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Roles & Responsibilities</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Selection Process</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>About Company</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job._id}>
                <TableCell>
                  {truncateText(job.title)}
                  {job.title.length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("Title", job.title)}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {truncateText(job.company)}
                  {job.company.length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("Company", job.company)}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {/* <img src={job.image} alt="job" style={{ width: "50px", height: "auto" }} /> */}
                </TableCell>
                <TableCell>
                  {truncateText(job.location)}
                  {job.location.length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("Location", job.location)}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {truncateText(Array.isArray(job.description) ? job.description.join(", ") : job.description)}
                  {(Array.isArray(job.description) ? job.description.join(", ") : job.description).length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("Description", Array.isArray(job.description) ? job.description.join(", ") : job.description)}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {truncateText(job.requirements.join(", "))}
                  {job.requirements.join(", ").length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("Requirements", job.requirements.join(", "))}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>{job.type}</TableCell>
                <TableCell>
                  {truncateText(job.sector)}
                  {job.sector.length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("Sector", job.sector)}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {truncateText(job.salary)}
                  {job.salary.length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("Salary", job.salary)}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>{new Date(job.applicationDeadline).toLocaleDateString()}</TableCell>
                <TableCell>{job.isActive ? "Yes" : "No"}</TableCell>
                <TableCell>{new Date(job.createdAt).toLocaleDateString()}</TableCell>
                <TableCell>{job.pin ? "Yes" : "No"}</TableCell>
                <TableCell>
                  {truncateText(job.rolesAndResponsibilities.join(", "))}
                  {job.rolesAndResponsibilities.join(", ").length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("Roles & Responsibilities", job.rolesAndResponsibilities.join(", "))}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {truncateText(job.selectionProcess.join(", "))}
                  {job.selectionProcess.join(", ").length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("Selection Process", job.selectionProcess.join(", "))}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {truncateText(job.aboutCompany || "")}
                  {(job.aboutCompany || "").length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("About Company", job.aboutCompany || "")}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" onClick={() => handleEditClick(job)} sx={{ mr: 1 }}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="error" onClick={() => onDelete(job._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{selectedField.key}</DialogTitle>
        <DialogContent>
          <Typography>{selectedField.value}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>

      {editingJob && (
        <Dialog open={editDialogOpen} onClose={handleEditClose}>
          <DialogTitle>Edit Job</DialogTitle>
          <DialogContent>
            <TextField
              label="Title"
              value={editingJob.title}
              onChange={(e) => handleEditChange("title", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Company"
              value={editingJob.company}
              onChange={(e) => handleEditChange("company", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Image URL"
              value={editingJob.image || ""}
              onChange={(e) => handleEditChange("image", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Location"
              value={editingJob.location}
              onChange={(e) => handleEditChange("location", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
            />
            
            <Typography>Description</Typography>
            {editingJob.description.map((desc, index) => (
              <TextField
                key={index}
                value={desc}
                onChange={(e) => handleEditChange("description", e.target.value, index)}
                fullWidth
                margin="normal"
                multiline
                onKeyDown={handleKeyDown}
              />
            ))}
            <Button onClick={() => handleAddField("description")}>+ Add Description</Button>

            <Typography>Requirements</Typography>
            {editingJob.requirements.map((req, index) => (
              <TextField
                key={index}
                value={req}
                onChange={(e) => handleEditChange("requirements", e.target.value, index)}
                fullWidth
                margin="normal"
                onKeyDown={handleKeyDown}
              />
            ))}
            <Button onClick={() => handleAddField("requirements")}>+ Add Requirement</Button>

            <TextField
              label="Type"
              value={editingJob.type}
              onChange={(e) => handleEditChange("type", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Sector"
              value={editingJob.sector}
              onChange={(e) => handleEditChange("sector", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Salary"
              value={editingJob.salary}
              onChange={(e) => handleEditChange("salary", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Application Deadline"
              type="date"
              value={new Date(editingJob.applicationDeadline).toISOString().split("T")[0]}
              onChange={(e) => handleEditChange("applicationDeadline", new Date(e.target.value).toISOString())}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
            />
            
            <Typography>Roles and Responsibilities</Typography>
            {editingJob.rolesAndResponsibilities.map((role, index) => (
              <TextField
                key={index}
                value={role}
                onChange={(e) => handleEditChange("rolesAndResponsibilities", e.target.value, index)}
                fullWidth
                margin="normal"
                onKeyDown={handleKeyDown}
              />
            ))}
            <Button onClick={() => handleAddField("rolesAndResponsibilities")}>+ Add Role</Button>

            <Typography>Selection Process</Typography>
            {editingJob.selectionProcess.map((process, index) => (
              <TextField
                key={index}
                value={process}
                onChange={(e) => handleEditChange("selectionProcess", e.target.value, index)}
                fullWidth
                margin="normal"
                onKeyDown={handleKeyDown}
              />
            ))}
            <Button onClick={() => handleAddField("selectionProcess")}>+ Add Process</Button>

            <TextField
              label="About Company"
              value={editingJob.aboutCompany || ""}
              onChange={(e) => handleEditChange("aboutCompany", e.target.value)}
              fullWidth
              margin="normal"
              multiline
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Job Link"
              value={editingJob.jobLink || ""}
              onChange={(e) => handleEditChange("jobLink", e.target.value)}
              fullWidth
              margin="normal"
              multiline
              onKeyDown={handleKeyDown}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={editingJob.isActive}
                  onChange={(e) => handleEditChange("isActive", e.target.checked)}
                />
              }
              label="Active"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={editingJob.pin}
                  onChange={(e) => handleEditChange("pin", e.target.checked)}
                />
              }
              label="Pinned"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditClose}>Cancel</Button>
            <Button onClick={handleEditSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}