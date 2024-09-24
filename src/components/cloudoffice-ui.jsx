'use client'

import { useState } from 'react'
import Link from 'next/link'  // Import Link from Next.js
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
  Briefcase,
  Folder,
  File,
  Plus,
  Filter
} from 'lucide-react'
import { DashboardComponent } from './dashboard'
import { NewProjectFormComponent } from './new-project-form'

export function CloudofficeUi() {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      documentCode: 'DOC001',
      name: 'Báo cáo tháng 7',
      type: 'PDF',
      service: 'Báo cáo',
      partner: 'Công ty A',
      department: 'Phòng Kinh doanh',
      date: '2023-07-15',
      status: 'Đã duyệt', // Approved
    },
    {
      id: 2,
      documentCode: 'DOC002',
      name: 'Hợp đồng nhân sự',
      type: 'DOCX',
      service: 'Nhân sự',
      partner: 'Công ty B',
      department: 'Phòng Nhân sự',
      date: '2023-07-14',
      status: 'Chờ duyệt', // Pending
    },
    {
      id: 3,
      documentCode: 'DOC003',
      name: 'Kế hoạch Q3',
      type: 'XLSX',
      service: 'Kế hoạch',
      partner: 'Công ty C',
      department: 'Phòng Kế hoạch',
      date: '2023-07-13',
      status: 'Đang soạn', // In Progress
    },
    {
      id: 4,
      documentCode: 'DOC004',
      name: 'Biên bản họp',
      type: 'PDF',
      service: 'Họp',
      partner: 'Công ty D',
      department: 'Phòng Hành chính',
      date: '2023-07-12',
      status: 'Đã duyệt', // Approved
    },
    {
      id: 5,
      documentCode: 'DOC005',
      name: 'Đề xuất dự án',
      type: 'PPTX',
      service: 'Dự án',
      partner: 'Công ty E',
      department: 'Phòng Dự án',
      date: '2023-07-11',
      status: 'Đã hủy'
    },
  ]);

  const getStatusClasses = (status) => {
    switch (status) {
      case 'Đã duyệt':
        return 'bg-green-600'; // Approved
      case 'Chờ duyệt':
        return 'bg-yellow-600'; // Pending approval
      case 'Đang soạn':
        return 'bg-blue-600'; // In progress
      case 'Đã hủy':
        return 'bg-red-600'; // Canceled
      case 'Hoàn thành':
        return 'bg-purple-600'; // Completed
      case 'Đang chờ':
        return 'bg-orange-600'; // Awaiting action
      default:
        return 'bg-gray-600'; // Default gray background
    }
  };


  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">Unkown Name</h1>
        </div>
        <nav className="mt-4">
          <Link legacyBehavior href="/documents">
            <a className="flex items-center px-4 py-3 text-gray-700 text-sm font-medium hover:bg-gray-200">
              <FileText className="mr-2 h-5 w-5 text-gray-600" />
              Tất cả văn bản
            </a>
          </Link>
          <Link legacyBehavior href="/requests">
            <a className="flex items-center px-4 py-3 text-gray-700 text-sm font-medium hover:bg-gray-200">
              <Inbox className="mr-2 h-5 w-5 text-gray-600" />
              Yêu cầu của tôi
            </a>
          </Link>
          <Link legacyBehavior href="/document-types">
            <a className="flex items-center px-4 py-3 text-gray-700 text-sm font-medium hover:bg-gray-200">
              <File className="mr-2 h-5 w-5 text-gray-600" />
              Loại Văn Bản
            </a>
          </Link>
          <Link legacyBehavior href="/departments">
            <a className="flex items-center px-4 py-3 text-gray-700 text-sm font-medium hover:bg-gray-200">
              <Folder className="mr-2 h-5 w-5 text-gray-600" />
              Phòng Ban
            </a>
          </Link>
          <Link legacyBehavior href="/partners">
            <a className="flex items-center px-4 py-3 text-gray-700 text-sm font-medium hover:bg-gray-200">
              <Briefcase className="mr-2 h-5 w-5 text-gray-600" />
              Đối Tác
            </a>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-3 bg-white shadow">
          <div className="flex items-center">
            <Input type="search" placeholder="Tìm kiếm văn bản..." className="w-64 text-sm rounded-e-none" />
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-l-none ">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center">
            {/* <Button variant="ghost" size="icon" className="mr-3 h-8 w-8">
              <Mail className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="mr-3 h-8 w-8">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="flex items-center h-8">
              <User className="h-4 w-4 mr-2" />
              <span className="text-sm">Nguyễn Văn A</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button> */}
            <DashboardComponent />
          </div>

        </header>

        {/* Document List */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-700">Danh sách văn bản</h2>
              <div className='flex items-center gap-2'>
                <NewProjectFormComponent />
                <Button variant="outline" className="px-3 py-2 text-xs">
                  <Filter className="h-4 w-4 mr-2" />
                  Lọc
                </Button>
              </div>
            </div>
            <Table>
              <TableHeader className="bg-white">
                <TableRow>
                  <TableHead className="text-xs font-medium">Số thứ tự</TableHead>
                  <TableHead className="text-xs font-medium">Số ký hiệu</TableHead>
                  <TableHead className="text-xs font-medium">Tên văn bản</TableHead>
                  <TableHead className="text-xs font-medium">Loại Văn bản</TableHead>
                  <TableHead className="text-xs font-medium">Dịch vụ</TableHead>
                  <TableHead className="text-xs font-medium">Đối tác</TableHead>
                  <TableHead className="text-xs font-medium">Phòng ban</TableHead>
                  <TableHead className="text-xs font-medium">Ngày nhập</TableHead>
                  <TableHead className="text-xs font-medium">Trạng thái</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((doc, index) => (
                  <TableRow key={doc.id}>
                    <TableCell className="font-medium text-xs">{index + 1}</TableCell>
                    <TableCell className="text-xs">{doc.documentCode}</TableCell>
                    <TableCell className="text-xs">{doc.name}</TableCell>
                    <TableCell className="text-xs">{doc.type}</TableCell>
                    <TableCell className="text-xs">{doc.service}</TableCell>
                    <TableCell className="text-xs">{doc.partner}</TableCell>
                    <TableCell className="text-xs">{doc.department}</TableCell>
                    <TableCell className="text-xs">{doc.date}</TableCell>
                    <TableCell>
                      <span className={`inline-block px-3 py-1 w-full text-xs font-semibold text-center text-white rounded-full ${getStatusClasses(doc.status)}`}>
                        {doc.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

          </div>
        </main>
      </div>
    </div>
  );
}
