'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  Search, 
  Mail, 
  Bell, 
  User, 
  ChevronDown, 
  FileText, 
  Inbox, 
  Send, 
  Archive, 
  Trash2,
  Plus,
  Filter
} from 'lucide-react'

export function CloudofficeUi() {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Báo cáo tháng 7', type: 'PDF', date: '2023-07-15', status: 'Đã duyệt' },
    { id: 2, name: 'Hợp đồng nhân sự', type: 'DOCX', date: '2023-07-14', status: 'Chờ duyệt' },
    { id: 3, name: 'Kế hoạch Q3', type: 'XLSX', date: '2023-07-13', status: 'Đang soạn' },
    { id: 4, name: 'Biên bản họp', type: 'PDF', date: '2023-07-12', status: 'Đã duyệt' },
    { id: 5, name: 'Đề xuất dự án', type: 'PPTX', date: '2023-07-11', status: 'Chờ duyệt' },
  ])

  return (
    (<div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-600">Cloudoffice</h1>
        </div>
        <nav className="mt-4">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-100">
            <FileText className="mr-3 text-gray-600" />
            Tất cả văn bản
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Inbox className="mr-3 text-gray-600" />
            Hộp thư đến
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Send className="mr-3 text-gray-600" />
            Đã gửi
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Archive className="mr-3 text-gray-600" />
            Lưu trữ
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Trash2 className="mr-3 text-gray-600" />
            Thùng rác
          </a>
        </nav>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
          <div className="flex items-center">
            <Input type="search" placeholder="Tìm kiếm văn bản..." className="w-64 mr-4" />
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="mr-4">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>Nguyễn Văn A</span>
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </header>

        {/* Document List */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-700">Danh sách văn bản</h2>
              <div>
                <Button className="mr-2">
                  <Plus className="h-4 w-4 mr-2" />
                  Tạo mới
                </Button>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Lọc
                </Button>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tên văn bản</TableHead>
                  <TableHead>Loại</TableHead>
                  <TableHead>Ngày tạo</TableHead>
                  <TableHead>Trạng thái</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell className="font-medium">{doc.name}</TableCell>
                    <TableCell>{doc.type}</TableCell>
                    <TableCell>{doc.date}</TableCell>
                    <TableCell>{doc.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>)
  );
}