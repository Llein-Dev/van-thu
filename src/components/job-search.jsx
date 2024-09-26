'use client'

import { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function JobSearchComponent() {
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false)

  return (
    (<div className="bg-gray-100 mb-5">
      <div className=" mx-auto bg-white rounded-lg shadow-md p-6">
        <form className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">

              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input className="pl-10" placeholder="Văn bản" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-[180px] bg-gray-800 color text-white">
                <SelectValue placeholder="Phòng Ban" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Phòng IT</SelectItem>
                <SelectItem value="2">Phòng Marketing</SelectItem>
                <SelectItem value="3">Phòng Quản lý</SelectItem>
              </SelectContent>
            </Select>
            <Button type="submit">Tìm kiếm</Button>
            <Button
              type="button"
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => setIsAdvancedSearch(!isAdvancedSearch)}>
              <span>Lọc nâng cao</span>
              <ChevronDown
                className={`transform transition-transform ${isAdvancedSearch ? 'rotate-180' : ''}`} />
            </Button>
          </div>

          {isAdvancedSearch && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-4">
              
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Loại Văn Bản" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="33">Agency (Design/Development)</SelectItem>
                  <SelectItem value="34">Agency (Marketing/Advertising)</SelectItem>
                  <SelectItem value="11">Bán lẻ - Hàng tiêu dùng - FMCG</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Loại Dự án" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Chưa có kinh nghiệm</SelectItem>
                  <SelectItem value="2">Dưới 1 năm</SelectItem>
                  <SelectItem value="3">1 năm</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Thời Gian" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Dưới 10 triệu</SelectItem>
                  <SelectItem value="5">10 - 15 triệu</SelectItem>
                  <SelectItem value="7">15 - 20 triệu</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Đối tác" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Nhân viên</SelectItem>
                  <SelectItem value="2">Trưởng nhóm</SelectItem>
                  <SelectItem value="3">Trưởng/Phó phòng</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Tình Trạng" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Toàn thời gian</SelectItem>
                  <SelectItem value="3">Bán thời gian</SelectItem>
                  <SelectItem value="5">Thực tập</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </form>
      </div>
    </div>)
  );
}