package com.doantotnghiepptit.GiaoLuuCauLong.model.dto;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
public class Role {
    private Long id;
    private String name;
    private String code;
    private String description;

}
